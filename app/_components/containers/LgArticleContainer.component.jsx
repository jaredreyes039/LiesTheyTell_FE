import PropTypes from 'prop-types';
import FullContainer from './FullContainer.component';
import MdContainer from './MdContainer.component';
import CategoryText from '../text/CategoryText.component';
import Image from 'next/image';
import HeaderText from '../text/HeaderText.component';
import SubHeaderText from '../text/SubHeaderText.component';

export default function LgArticleContainer(props) {

	const { cat, src, alt, title, hdlnr } = props;

	return (
		<div className="duration-150 hover:opacity-75">
			<FullContainer>
				<MdContainer>
					<div className="w-full h-full flex flex-col mr-4">
						<div className="w-full mb-4 border-r-2 border-black">
							<CategoryText spotlight text={cat.toUpperCase()} />
						</div>
						<div className="aspect-square w-full relative">
							<Image src={src}
								alt={alt}
								fill />
						</div>
					</div>
				</MdContainer>
				<MdContainer>
					<div className="w-full flex flex-col">
						<HeaderText landing text={title} />
						<div className="mb-12">
							<SubHeaderText text={hdlnr} />
						</div>
					</div>
				</MdContainer>
			</FullContainer>
		</div>
	)
}

LgArticleContainer.propTypes = {
	cat: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	hdlnr: PropTypes.string
}
