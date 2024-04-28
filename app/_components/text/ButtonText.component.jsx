


export default function ButtonText(props) {
	const { spec, text } = props

	return (
		<p
			className={`
			${spec ? "text-red-500" : "text-black"}
			opacity-75
			sm:max-lg:text-md
			lg:text-lg
		`}
		>
			{text}
		</p >
	)
}
