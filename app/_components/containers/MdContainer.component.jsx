

export default function MdContainer(props) {
	const { center, padded, children } = props;
	return (
		<div className={`h-full w-1/2 flex ${center ? "items-center" : ""} ${padded ? "px-4 py-4" : "px-0 py-0"} mt-0 mb-4 ml-0 mr-0 relative`}>
			{children}
		</div>
	)
}
