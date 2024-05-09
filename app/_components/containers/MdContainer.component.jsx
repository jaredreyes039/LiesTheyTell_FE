

export default function MdContainer(props) {
	const { center, col, padded, respCol, children } = props;
	return (
		<div className={`h-full flex ${respCol ? "w-full" : "w-1/2"} ${center ? "items-center" : ""} ${col ? "flex-col" : ""} ${padded ? "px-4 py-4" : "px-0 py-0"} mt-0 mb-4 ml-0 mr-0 relative`}>
			{children}
		</div>
	)
}
