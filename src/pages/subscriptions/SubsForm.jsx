import { SubsInputField } from '@/components/SubsInputField';
import { SubsInputSelect } from '@/components/SubsInputSelect';
import { useEnroll } from '../../hooks/useEnroll';


export const SubsForm = () => {

  const {enroll, loading, error, success } = useEnroll();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enrollmentData = {
      name: e.target.name.value,
      dni: e.target.dni.value,
      mail: e.target.email.value,
      phone: e.target.phone.value,
      active: true,
      role: e.target.rol.value,
      projects: e.target.projects,
      assigned: false,
    };
    //      ong: e.target.ong.value,
    //       link: e.target.link.value,



    try {
      await enroll(enrollmentData);
      if (success) {
        console.log("Inscripcion Exitosa")
      }
    } catch (err) {
      console.log(err);
    }
  }
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
          type={'text'}
          id={'rol'}
          options={['Diseño UX UI', 'Testing QA', 'Frontend', 'Backend']}
        />

        <SubsInputSelect
          placeholder={'Seleccione el nombre de su ONG'}
          textLabel={'Ong'}
          type={'text'}
          id={'ong'}
          options={['Talento tech', 'Silver tech', 'Forge']}
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
    </div>
  );
};

