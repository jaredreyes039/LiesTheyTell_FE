

export default function SubHeaderText(props) {
	const { text, warning, landing, small, fit } = props;

	return (
		<h2 className={`${fit ? "w-fit whitespace-nowrap" : "w-full"}  ${small ? "line-clamp-3 mb-4" : "line-clamp-6 mb-0"} ${warning ? 'text-red-500' : 'text-black'} opacity-75 ${small ? "sm:max-md:text-md md:text-lg" : !landing ? "sm:max-md:text-lg md:text-xl" : "sm:max-md:text-xl md:text-2xl"}`} >
			{text}
		</h2 >
	)
}
