import PropTypes from 'prop-types';

export default function FullContainer(props) {
	const { children, center, padded } = props;

	return (
		<div className={`w-full h-full flex ${center ? "items-center" : ""} ${padded ? "px-4 py-4" : "px-0 py-0"} mt-0 mb-0 ml-0 mr-0 relative`}>
			{children}
		</div>
	)
}

FullContainer.propTypes = {
	center: PropTypes.bool,
	padded: PropTypes.bool
}
