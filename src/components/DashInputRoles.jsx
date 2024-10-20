export const DashInputRoles = (props) => {
  const { value, text } = props;
  return (
    <div className='flex flex-row content-center gap-2'>
      <label
        className='my-auto h-fit w-24 text-sm font-medium lg:w-40 lg:text-lg'
        htmlFor={value}
      >
        {text}:{' '}
      </label>
      <input
        className='my-2 w-1/3 rounded-xl border-0 bg-[#E7F0F8] p-3 focus:outline-none'
        type='number'
        name={value}
        id={value}
      />
    </div>
  );
};
