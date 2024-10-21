export const DashInputRoles = (props) => {
	const {
		value,
		text,
		onChange,
	
	} = props;
	return (
		<div className="flex flex-row gap-2 content-center">
			<label
				className="my-auto w-24 lg:w-40 text-sm lg:text-lg font-medium h-fit"
				htmlFor={value}>{text}: </label>
			<input
				className="my-2 w-1/3 focus:outline-none rounded-xl border-0 bg-[#E7F0F8] p-3"
				type="number"
				name={value} id={value} onChange={onChange} />
		</div>
	);
}