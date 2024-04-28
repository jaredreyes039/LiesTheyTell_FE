import PropTypes from 'prop-types';
import FullContainer from './FullContainer.component';
import MdContainer from './MdContainer.component';
import CategoryText from '../text/CategoryText.component';
import Image from 'next/image';
import HeaderText from '../text/HeaderText.component';
import SubHeaderText from '../text/SubHeaderText.component';
import SmContainer from './SmContainer.component';
import LgContainer from './LgContainer.component';

export default function MdArticleContainer(props) {

	const { cat, src, alt, title, hdlnr } = props;

	return (
		<div className="duration-150 hover:opacity-75 mb-4">
			<FullContainer>
				<div className='w-2/3'>
					<FullContainer>
						<div className="w-full flex flex-col">
							<div className="w-full mb-4 ">
								<CategoryText spotlight text={cat.toUpperCase()} />
							</div>
							<HeaderText landing text={title} />
							<div className="mb-12">
								<SubHeaderText text={hdlnr} />
							</div>
						</div>
					</FullContainer>
				</div>
				<LgContainer>
					<div className="h-full w-full relative">
						<Image src={src}
							alt={alt}
							fill />
					</div>
				</LgContainer>
			</FullContainer>
		</div>
	)
}

MdArticleContainer.propTypes = {
	cat: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	hdlnr: PropTypes.string
}
