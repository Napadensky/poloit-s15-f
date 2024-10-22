import { ChevronRightIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const SquadCard = ({ squad, index }) => {
  return (
    <Link to={`/dashboard/squadDetail/${squad._id}`}>
      <button className='flex w-full justify-around rounded-xl bg-[#2F68A1] py-5 text-base font-semibold text-neutral-50'>
        <UserGroupIcon className='size-6' />
        Squad {index + 1}
        <ChevronRightIcon className='size-6' />
      </button>
    </Link>
  );
};
