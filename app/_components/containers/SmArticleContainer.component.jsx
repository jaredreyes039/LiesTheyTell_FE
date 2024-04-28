import PropTypes from 'prop-types';
import FullContainer from './FullContainer.component';
import MdContainer from './MdContainer.component';
import CategoryText from '../text/CategoryText.component';
import Image from 'next/image';
import HeaderText from '../text/HeaderText.component';
import SubHeaderText from '../text/SubHeaderText.component';
import SmContainer from './SmContainer.component';

export default function SmArticleContainer(props) {

	const { cat, src, alt, title, hdlnr } = props;

	return (
		<div className="duration-150 hover:opacity-75">
			<FullContainer >
				<SmContainer >
					<div className="w-full flex flex-col mr-4">
						<div className="w-full mb-2 border-r-2 border-black">
							<CategoryText text={cat.toUpperCase()} />
						</div>
						<div className="aspect-square w-full relative">
							<Image src={src}
								alt={alt}
								fill />
						</div>
					</div>
				</SmContainer>
				<FullContainer >
					<div className="w-full flex flex-col">
						<HeaderText small text={title} />
						<div>
							<SubHeaderText small text={hdlnr} />
						</div>
					</div>
				</FullContainer>
			</FullContainer>
		</div>
	)
}

SmArticleContainer.propTypes = {
	cat: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	hdlnr: PropTypes.string
}
