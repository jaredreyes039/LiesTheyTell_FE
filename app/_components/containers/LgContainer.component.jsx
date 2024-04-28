

export default function LgContainer(props) {
	const { center, padded, children } = props;

	return (
		<div className={`w-2/3 flex ${center ? "items-center" : ""} ${padded ? "px-4 py-4" : "px-0 py-0"} mt-0 mb-4 ml-0 mr-0 relative`}>
			{children}
		</div>
	)
}
