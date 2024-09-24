
import { useMask } from '@react-input/mask';

const stylesFormInput = 'flex items-center rounded-2xl bg-gray-300 p-4';
const stylesFormLabel = 'text-sm font-semibold text-gray-600 mb-1';
const stylesFromContainer = 'flex flex-col mb-4';

export const SubsInputField = (props) => {
  const { className, inputProps, textLabel, placeholder, type, id, typeMask } =
    props;

  const getTypeMask = () => {
    switch (typeMask || '') {
      case 'phone':
        return {
          mask: '+54 (___) ___-_____',
          replacement: { _: /\d/ },
        };
      case 'dni':
        return {
          mask: '__.___.___',
          replacement: { _: /\d/ },
        };
      default:
        return {
          mask: '____________________________',
          replacement: { _: /\D/ },
        };
    }
  };

  const inputRef = useMask(getTypeMask());

  return (
    <div className={`${stylesFromContainer} ${className}`}>
      <label className={`${stylesFormLabel}`} htmlFor={id}>
        {textLabel}
      </label>
      <input
        {...inputProps}
        ref={typeMask && inputRef}
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${stylesFormInput}`}
      />
    </div>
  );
};