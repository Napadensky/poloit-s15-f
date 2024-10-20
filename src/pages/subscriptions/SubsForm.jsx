import { useNavigate } from 'react-router-dom';
import { SubsInputField } from '@/components/SubsInputField';
import { SubsInputSelect } from '@/components/SubsInputSelect';
import { useEnroll } from '../../hooks/useEnroll';
import { useProject } from '../../hooks/useProject';
import { useSendEmail } from '../../hooks/useEmail';
import { useState } from 'react';

export const SubsForm = () => {
  const navigate = useNavigate();
  const {
    projects,
    loading: loadingProjects,
    error: errorProjects,
    fetchProjects,
  } = useProject();

  const { enroll, loading, error, success } = useEnroll();
  const { triggerEmail } = useSendEmail();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enrollmentData = {
      name: e.target.name.value,
      dni: e.target.dni.value,
      mail: e.target.email.value,
      phone: e.target.phone.value,
      role: e.target.rol.value,
      projects: e.target.proyecto.value,
      ong: e.target.ong.value,
      link: e.target.link.value,
    };

    try {
      const result = await enroll(enrollmentData); // Guarda la inscripción
      console.log('Resultado de la inscripción:', result);

      console.log(enrollmentData.mail);

      // Solo envía el correo si la inscripción fue exitosa
      if (result) {
        const emailData = {
          to: enrollmentData.mail,
          subject: 'Inscripción Exitosa',
          text: `Hola ${enrollmentData.name},\n\nTu inscripción ha sido exitosa. Ya sos parte de PoloIT, te haremos llegar los detalles cuando termine el periodo de inscripcion.`,
        };
        await triggerEmail(emailData); // Envía el correo
        setShowSuccessPopup(true);
        e.target.reset(); // Limpia el formulario
      }
    } catch (err) {
      console.log('Error al inscribir:', err);
    }
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
          options={[
            { text: 'UX-UI', value: 'UX/UI' },
            { text: 'QA', value: 'QA' },
            { text: 'Frontend', value: 'Frontend' },
            { text: 'Backend', value: 'Backend' },
          ]}
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
          placeholder={'Seleccione el nombre de su ONG'}
          textLabel={'Ong'}
          id={'ong'}
          options={[
            { text: 'Talento tech', value: 'Talento tech' },
            { text: 'Silver tech', value: 'Silver tech' },
            { text: 'Forge', value: 'Forge' },
          ]}
        />

        <SubsInputField
          placeholder={'Ingrese link de constancia'}
          textLabel={'Link de constancia'}
          type={'text'}
          id={'link'}
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
