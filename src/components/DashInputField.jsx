export const DashInputField = (props) => {
    const { inputProps, textLabelMobile,textLabelDesktop,inputClassName, labelClassName, placeholder, type, id, name, value, onChange } = props;
    return (
      <div>
        <label className={labelClassName} htmlFor={id}>
        <span className="lg:hidden">{textLabelMobile}</span>
        <span className="hidden lg:inline">{textLabelDesktop}</span>
     
        </label>
        <input
          {...inputProps}
          type={type}
          value={value}
          id={id}
          name={name}
          placeholder={placeholder}
          className={`${inputClassName} focus:outline-none`}  
          onChange={onChange}
        />
      </div>
    );
  };