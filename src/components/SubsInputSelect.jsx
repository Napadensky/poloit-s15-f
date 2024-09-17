const stylesFormInput = 'flex items-center rounded-2xl bg-gray-300 p-4';
const stylesFormLabel = 'text-sm font-semibold text-gray-600 mb-1';
const stylesFromContainer = 'flex flex-col mb-4';

export const SubsInputSelect = (props) => {
  const { className } = props;
  const { textLabel, options, id } = props;

  return (
    <div className={`${stylesFromContainer} ${className}`}>
      <label className={`${stylesFormLabel}`} htmlFor={id}>
        {textLabel}
      </label>
      <select className={`${stylesFormInput}`} id={id}>
        <option value=''>Seleccionar</option>
        {options?.map((option, index) => {
          const { value, text } = option;
          return (
            <option key={`${index}-${value}-${text}`} value={value}>
              {text}
            </option>
          );
        })}
      </select>
    </div>
  );
};