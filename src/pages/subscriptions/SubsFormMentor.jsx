import { SubsInputField } from '@/components/SubsInputField';
import { SubsInputSelect } from '@/components/SubsInputSelect';
import { useMentor } from '../../hooks/useMentor';
import { useProject } from '../../hooks/useProject';
import { useSendEmail } from '../../hooks/useEmail';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SubsFormMentor = () => {
  const navigate = useNavigate();
  const { projects } = useProject();

  const { mentor, loading, error, success } = useMentor();
  const { triggerEmail } = useSendEmail();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mentorData = {
      name: e.target.name.value,
      dni: e.target.dni.value,
      mail: e.target.email.value,
      phone: e.target.phone.value,
      role: e.target.rol.value,
      projects: e.target.proyecto.value,
      ong: e.target.ong.value,
      skills: e.target.skill.value,
    };

    try {
      const result = await mentor(mentorData); // Guarda la inscripción

      // Solo envía el correo si la inscripción fue exitosa
      if (result) {
        const emailData = {
          to: mentorData.mail,
          subject: 'Inscripción Exitosa',
          text: `Hola ${mentorData.name},\n\nTu inscripción ha sido exitosa. Ya sos parte de PoloIT, te haremos llegar los detalles cuando termine el periodo de inscripcion.`,
        };
        await triggerEmail(emailData); // Envía el correo
        setShowSuccessPopup(true);
        e.target.reset(); // Limpia el formulario
      }
    } catch (err) {
      console.error('Error al inscribir:', err);
    }
  };
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className='mx-auto max-w-md rounded-lg bg-white p-8 shadow-md'>
      <p className='mb-4 text-gray-700'>
        Completa el siguiente formulario y te enviaremos toda la información a
        tu correo electrónico.
      </p>
      <h2 className='mb text-xl font-bold text-blue-500'>Datos Personales</h2>

      <form onSubmit={handleSubmit}>
        <SubsInputField
          placeholder={'Ingrese su nombre completo'}
          textLabel={'Nombre Completo'}
          type={'text'}
          id={'name'}
        />

        <SubsInputField
          placeholder={'Ingrese su DNI'}
          textLabel={'DNI'}
          type={'text'}
          id={'dni'}
          typeMask={'dni'}
        />

        <SubsInputField
          placeholder={'Ingrese su número de celular'}
          textLabel={'Celular'}
          type={'text'}
          id={'phone'}
          typeMask={'phone'}
        />

        <SubsInputField
          placeholder={'Ingrese su correo electrónico'}
          textLabel={'Correo'}
          type={'text'}
          id={'email'}
        />

        <h2 className='mb text-xl font-bold text-blue-500'>
          Atributos de Perfil
        </h2>

        <SubsInputSelect
          placeholder={'Seleccione su rol'}
          textLabel={'Rol'}
          id={'rol'}
          options={[{ text: 'Mentor', value: 'Mentor' }]}
        />
        <SubsInputSelect
          placeholder={'Seleccione un proyecto'}
          textLabel={'Proyecto'}
          id={'proyecto'}
          options={projects.map((project) => ({
            text: project.title,
            value: project._id, // Usar el ID de MongoDB
          }))}
        />

        <SubsInputSelect
          placeholder={'Seleccione el nombre de su empresa'}
          textLabel={'Empresa asociada'}
          id={'ong'}
          options={[
            { text: 'Epidata', value: 'Epidata' },
            { text: 'Globant', value: 'Globant' },
            { text: 'Gire', value: 'Gire' },
            { text: 'Prisma', value: 'Prisma' },
            { text: 'MindHub', value: 'MindHub' },
          ]}
        />

        <SubsInputSelect
          placeholder={'Seleccion de Main Skill para Mentoria'}
          textLabel={'Skill de Mentoreo'}
          id={'skill'}
          options={[
            { text: 'Developer', value: 'Developer' },
            { text: 'QA', value: 'QA' },
            { text: 'UX/UI', value: 'UX/UI' },
          ]}
        />

        <div className='flex justify-between gap-4'>
          <button
            type='button'
            className='focus:shadow-outline text-blue hover:bg-[#71AJD6]focus:outline-none w-full rounded-xl border border-blue-500 px-4 py-2 focus:bg-[#F4F5F6]'
            onClick={handleCancel}
          >
            Cancelar
          </button>

          <button
            type='submit'
            className='focus:shadow-outline hover:bg-[#71AJD6]focus:outline-none w-full rounded-xl bg-[#2F68A1] px-4 py-2 font-bold text-white focus:bg-[#2F68A1]'
          >
            Inscribirme
          </button>
        </div>
      </form>

      {showSuccessPopup && (
        <div className='fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='rounded bg-white p-5 shadow-lg'>
            <h2 className='text-lg font-bold text-green-600'>
              Inscripción Exitosa
            </h2>
            <p>
              Tu inscripción ha sido realizada con éxito. Revisa tu correo para
              más información.
            </p>
            <button
              className='mt-4 rounded bg-blue-500 px-4 py-2 text-white'
              onClick={() => setShowSuccessPopup(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
