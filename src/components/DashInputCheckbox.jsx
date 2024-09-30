export const DashInputCheckbox = (props) => {
  const {
    fieldsetClassName,
    legendClassName,
    textLegend,
    options,
    name,
    selectedValues,
    handleSelect,
  } = props;
  
  return (
    <fieldset className={fieldsetClassName}>
      <legend className={legendClassName}>{textLegend}</legend>
      {options?.map((option) => {
        const { value, text } = option;
        const isSelected = selectedValues.includes(value);
        return (
          <div key={`${name}-${value}`} >
            <input
              type='checkbox'
              id={`${name}-${value}`}
              className='hidden'
              name={name}
              value={value}
              checked={isSelected}
              onChange={() => handleSelect(value)}
              required
            />
            <label htmlFor={`${name}-${value}`} 
            className={`cursor-pointer rounded-xl px-5 py-3 text-[0.68rem] font-semibold ${
                isSelected
                  ? 'bg-[#2F68A1] text-neutral-50'
                  : 'bg-[#E7F0F8] text-gray-600'
              }`}
            >{text}</label>
          </div>
        );
      })}
    </fieldset>
  );
};

