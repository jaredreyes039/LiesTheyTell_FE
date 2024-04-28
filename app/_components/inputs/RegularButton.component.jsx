'use client'
import ButtonText from "../text/ButtonText.component";
import PropTypes from 'prop-types';

export default function RegularButton(props) {

	const { width, label, clickHandler, navLoc } = props;

	return (
		<button
			className={
				`
			${width}
			px-8
			py-2
			rounded-md
			border-2
			border-white
			duration-150
			hover:bg-gray-100
			hover:bg-opacity-10
			hover:scale-105
			`
			}
			onClick={(e) => { clickHandler(e) }}
			id={navLoc}
		>
			<ButtonText text={label} />
		</button>
	)

}

RegularButton.propTypes = {
	width: PropTypes.string,
	label: PropTypes.string,
	clickHandler: PropTypes.func,
	navLoc: PropTypes.string
}
