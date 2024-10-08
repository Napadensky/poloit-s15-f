import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const SubsInputCard = (props) => {
  const { _id, img, title, description, startDate, endDate } = props;
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
    <div className='my-4 flex flex-col items-center justify-center gap-4 rounded-xl border border-[#71A3D6]'>
      {imageUrl && (
        <img
          className='h-40 w-full rounded-xl object-cover'
          src={imageUrl}
          alt='Imagen del proyecto'
        />
      )}
      <h2 className='text-xl font-bold text-[#262A2C]'>{title}</h2>
      <p className='text-base font-normal text-[#262A2C]'>{description}</p>
      <div className='flex w-64 flex-row gap-2 rounded-xl border border-transparent bg-[#F4F5F6] p-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='#262A2C'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
          />
        </svg>

        <p className='text-sm font-bold text-[#262A2C]'>
          El proyecto inicia el {adjustDate(startDate)}, entrega el{' '}
          {adjustDate(endDate)}
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <Link to={`/SubsFormMentor/${_id}`}>
          <button className='w-64 rounded-xl border border-transparent bg-[#2F68A1] p-3 text-base font-semibold text-white'>
            Soy Mentor
          </button>
        </Link>
        <Link to={`/SubsForm/${_id}`}>
          <button className='w-64 rounded-xl border border-transparent bg-[#DD5A6B] p-3 text-base font-semibold text-white'>
            Soy Egresado
          </button>
        </Link>
      </div>
    </div>
  );
};
