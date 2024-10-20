import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const SubsInputCard = (props) => {
  const { _id, img, title, description, startDate, endDate, bottonClassname } =
    props;
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (img) {
      if (!img.startsWith('http')) {
        setImageUrl(`${import.meta.env.VITE_API_URL}${img}`);
      } else {
        setImageUrl(img);
      }
    }
  }, [img]);
  const adjustDate = (dateString) => {
    const date = new Date(dateString);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    return date.toLocaleDateString();
  };

  return (
    <div className='my-4 flex flex-col items-center justify-center gap-4 rounded-xl border border-[#71A3D6] lg:mx-auto lg:flex-row lg:justify-evenly lg:p-4'>
      <div className='lg:mx-auto lg:w-1/3'>
        {imageUrl && (
          <img
            className='h-40 w-full rounded-xl object-cover lg:h-64 lg:w-96'
            src={imageUrl}
            alt='Imagen del proyecto'
          />
        )}
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-2 p-2 lg:flex lg:w-2/3 lg:gap-8'>
        <h2 className='text-xl font-bold text-[#262A2C]'>{title}</h2>
        <p className='text-base font-normal text-[#262A2C] lg:w-96'>
          {description}
        </p>
        <div className='flex flex-row gap-2 rounded-xl border border-transparent bg-[#F4F5F6] p-2 lg:w-72'>
          <CalendarDaysIcon className='size-8 text-[#262A2C]' />
          <p className='text-sm font-bold text-[#262A2C]'>
            El proyecto inicia el {adjustDate(startDate)}, entrega el{' '}
            {adjustDate(endDate)}
          </p>
        </div>
        <div
          className={`flex flex-col items-center gap-2 py-2 lg:flex-row lg:justify-evenly ${bottonClassname}`}
        >
          <Link to={`/SubsFormMentor/${_id}`}>
            <button className='w-40 rounded-xl border border-transparent bg-[#2F68A1] p-2 text-base font-semibold text-white'>
              Soy Mentor
            </button>
          </Link>
          <Link to={`/SubsForm/${_id}`}>
            <button className='w-40 rounded-xl border border-transparent bg-[#DD5A6B] p-2 text-base font-semibold text-white'>
              Soy Egresado
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
