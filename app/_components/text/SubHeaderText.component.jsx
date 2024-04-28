

export default function SubHeaderText(props) {
	const { text, landing, small } = props;

	return (
		<h2 className={`w-full line-clamp-3 mb-4 text-black opacity-75 ${small ? "sm:max-md:text-md md:text-lg" : !landing ? "sm:max-md:text-lg md:text-xl" : "sm:max-md:text-xl md:text-2xl"}`} >
			{text}
		</h2 >
	)
}
