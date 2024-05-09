
import PropTypes from 'prop-types';
import FullContainer from './FullContainer.component';
import MdContainer from './MdContainer.component';
import CategoryText from '../text/CategoryText.component';
import Image from 'next/image';
import HeaderText from '../text/HeaderText.component';
import SubHeaderText from '../text/SubHeaderText.component';
import SmContainer from './SmContainer.component';
import LgContainer from './LgContainer.component';
import { useRouter } from 'next/navigation';

export default function MdArticleContainer(props) {

	const { artid, cat, src, alt, title, hdlnr } = props;
	const ROUTER = useRouter();

	function handleNavToArticle(e) {
		e.preventDefault();
		ROUTER.push(`/articles/${artid}`);
	}

	return (
		<div className="duration-150 hover:opacity-75 mb-4">
			<FullContainer respCol>
				<div className='w-2/3 max-md:w-full mr-12'>
					<FullContainer>
						<div className="w-full flex flex-col">
							<div className="w-full mb-4 ">
								<CategoryText spotlight text={cat.toUpperCase()} />
							</div>
							<div onClick={(e) => handleNavToArticle(e)}>
								<HeaderText landing text={title} />
							</div>
							<div className="mb-12">
								<SubHeaderText text={hdlnr} />
							</div>
						</div>
					</FullContainer>
				</div>
				<div className="w-3/4 max-md:w-full max-md:h-[256px]">
					<div className="h-full w-full relative">
						<Image src={src}
							alt={alt}
							fill />
					</div>
				</div>
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
