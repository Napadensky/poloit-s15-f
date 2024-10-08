import project from '../../../assets/project-img.jpg';
import chevron from '../../../assets/chevron-right.png';
import user from '../../../assets/user-group.png';

const DashProjectDetail = () => {
  return (
    <div className='m-4 flex flex-col gap-3 align-middle lg:flex-row lg:justify-around'>
      <div className='flex flex-col content-center gap-3 lg:w-5/12'>
        <img
          src={project}
          alt='Imagen representativa del proyecto'
          className='h-52 w-80 rounded-xl object-cover lg:h-auto lg:w-[34rem]'
        />

        <h2 className='text-lg font-semibold text-[#1C3D5F]'>
          Proyecto App Ecológica
        </h2>
        <h3 className='text-sm font-normal text-gray-600'>
          Duración <b>Septiembre - Diciembre</b> 2024
        </h3>
        <h3 className='text-sm font-normal text-gray-600'>
          Modalidad <b>Virtual</b>
        </h3>
        <h3 className='text-sm font-normal text-gray-600'>
          Cantidad de squads <b>16</b>
        </h3>
        <p className='text-sm font-normal text-gray-600'>
          Una aplicación móvil diseñada para promover hábitos sostenibles.
          EcoApp ofrece consejos ecológicos diarios, rutas de reciclaje
          cercanas, y desafíos ambientales para reducir tu huella de carbono.
          Conecta a los usuarios con iniciativas locales y fomenta un estilo de
          vida más consciente con el medio ambiente.
        </p>
      </div>
      <div className='flex flex-col gap-3 lg:w-3/12'>
        <button className='] flex justify-around rounded-xl bg-[#2F68A1] py-5 text-base font-semibold text-neutral-50'>
          <img src={user} className='stroke-neutral-300' />
          Squad 1
          <img src={chevron} />
        </button>
        <button className='flex justify-around rounded-xl bg-stone-200 py-5 text-base font-semibold text-neutral-300'>
          <img src={user} />
          Squad 2
          <img src={chevron} />
        </button>
        <button className='flex justify-around rounded-xl bg-stone-200 py-5 text-base font-semibold text-neutral-300'>
          <img src={user} />
          Squad 3
          <img src={chevron} />
        </button>
        <button className='hidden justify-around rounded-xl bg-stone-200 py-5 text-base font-semibold text-neutral-300 lg:flex'>
          <img src={user} />
          Squad 4
          <img src={chevron} />
        </button>
        <button className='hidden justify-around rounded-xl bg-stone-200 py-5 text-base font-semibold text-neutral-300 lg:flex'>
          <img src={user} />
          Squad 5
          <img src={chevron} />
        </button>
        <button className='hidden justify-around rounded-xl bg-stone-200 py-5 text-base font-semibold text-neutral-300 lg:flex'>
          <img src={user} />
          Squad 6
          <img src={chevron} />
        </button>
        <button className='hidden justify-around rounded-xl bg-stone-200 py-5 text-base font-semibold text-neutral-300 lg:flex'>
          <img src={user} />
          Squad 7
          <img src={chevron} />
        </button>
        <button className='hidden justify-around rounded-xl bg-stone-200 py-5 text-base font-semibold text-neutral-300 lg:flex'>
          <img src={user} />
          Squad 8
          <img src={chevron} />
        </button>
      </div>
    </div>
  );
};

export { DashProjectDetail };
