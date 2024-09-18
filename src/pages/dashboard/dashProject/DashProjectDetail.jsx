import Card from '@/components/Card';
import project from '../../../assets/project-img.jpg';
import chevron from '../../../assets/chevron-right.png'
import user from '../../../assets/user-group.png'

const DashProjectDetail = () => {
  return (
    <div className='mx-auto flex flex-col align-middle'>
        <div className='flex flex-col lg:hidden gap-3 m-2'>
            <h2 className='text-lg text-cyan-700'><b>Proyecto</b> App Ecológica</h2>
            <div className='content-center'>
                <img src={project} alt='Imagen representativa del proyecto' />
            </div>
            <h3 className='text-sm'>Duración: <b>Septiembre - Diciembre</b> (2024)</h3>
            <h3 className='text-sm'>Modalidad: <b>Virtual</b></h3>
            <h3 className='text-sm'>Cantidad de squads: <b>16</b></h3>
            <p className='text-sm'>
                Una aplicación móvil diseñada para promover hábitos sostenibles.
                EcoApp ofrece consejos ecológicos diarios, rutas de reciclaje
                cercanas, y desafíos ambientales para reducir tu huella de carbono.
                Conecta a los usuarios con iniciativas locales y fomenta un estilo
                de vida más consciente con el medio ambiente.
            </p>
            <button className='bg-cyan-700 text-white flex justify-around rounded-lg py-5'>
                <img src={user} />
                Squad 1
                <img src={chevron} />
            </button>
            <button className='bg-slate-300 text-slate-400 flex justify-around rounded-lg py-5'>
                <img src={user} />
                Squad 2
                <img src={chevron} />
            </button>
            <button className='bg-slate-300 text-slate-400 flex justify-around rounded-lg py-5'>
                <img src={user} />
                Squad 3
                <img src={chevron} />
            </button>
        </div>
        <div className='hidden lg:block'>
            <div className='flex justify-center gap-5 p-3 mx-4 my-16 flex-row'>
                <div className='content-center w-5/12'>
                    <img src={project} alt='Imagen representativa del proyecto' />
                </div>
                <div className='w-7/12 gap-3'>
                    <h2 className='text-xl text-cyan-700'><b>Proyecto</b> App Ecológica</h2>
                    <h3 className='text-lg'>Squad <b>1</b></h3>
                    <h3 className='text-lg'>Duración <b>Septiembre - Diciembre (2024)</b></h3>
                    <h3 className='text-lg'>Modalidad <b>Virtual</b></h3>
                    <p className='text-lg'>
                        Una aplicación móvil diseñada para promover hábitos sostenibles.
                        EcoApp ofrece consejos ecológicos diarios, rutas de reciclaje
                        cercanas, y desafíos ambientales para reducir tu huella de carbono.
                        Conecta a los usuarios con iniciativas locales y fomenta un estilo
                        de vida más consciente con el medio ambiente.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 m-4 '>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
  );
};

export { DashProjectDetail };
