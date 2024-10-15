import { ChevronRightIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export const SquadCard = (props) => {
  const { squadName } = props;
  return (
    <button className='flex justify-around rounded-xl bg-[#2F68A1] py-5 text-base font-semibold text-neutral-50'>
      <UserGroupIcon className="size-6"/>
      {squadName}
      <ChevronRightIcon className="size-6"/>
    </button>
  );
};
