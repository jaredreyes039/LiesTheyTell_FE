

export default function RegularText(props) {
	const { text } = props;
	return (
		<p className="w-full leading-loose text-black max-md:text-md md:text-lg">
			{text}
		</p>
	)
}
