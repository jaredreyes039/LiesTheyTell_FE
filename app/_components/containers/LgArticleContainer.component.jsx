import PropTypes from 'prop-types';
import FullContainer from './FullContainer.component';
import MdContainer from './MdContainer.component';
import CategoryText from '../text/CategoryText.component';
import Image from 'next/image';
import HeaderText from '../text/HeaderText.component';
import SubHeaderText from '../text/SubHeaderText.component';
import { useRouter } from 'next/navigation';

export default function LgArticleContainer(props) {

	const { respCol, artid, cat, src, alt, title, hdlnr } = props;
	const ROUTER = useRouter();

	function handleNavToArticle(e) {
		e.preventDefault();
		ROUTER.push(`articles/${artid}`);
	}

	return (
		<div className="duration-150 hover:opacity-75">
			<FullContainer respCol={respCol}>
				<MdContainer respCol>
					<div className="w-full h-full flex flex-col mr-4">
						<div className="w-full mb-4 border-r-2 border-black">
							<CategoryText spotlight text={cat.toUpperCase()} />
						</div>
						<div className="aspect-square w-full relative" onClick={(e) => { handleNavToArticle(e) }}>
							<Image src={src}
								alt={alt}
								fill />
						</div>
					</div>
				</MdContainer>
				<MdContainer respCol>
					<div className="w-full flex flex-col">
						<div onClick={(e) => { handleNavToArticle(e) }}>
							<HeaderText landing text={title} />
						</div>
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
