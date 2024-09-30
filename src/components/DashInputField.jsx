export const DashInputField = (props) => {
    const { inputProps, textLabel,inputClassName, labelClassName, placeholder, type, id, name, value, onChange } = props;
    return (
      <div>
        <label className={labelClassName} htmlFor={id}>
          {textLabel}
        </label>
        <input
          {...inputProps}
          type={type}
          value={value}
          id={id}
          name={name}
          placeholder={placeholder}
          className={inputClassName}
          onChange={onChange}
          required
        />
      </div>
    );
  };