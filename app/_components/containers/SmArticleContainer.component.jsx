'use client'
import PropTypes from 'prop-types';
import FullContainer from './FullContainer.component';
import MdContainer from './MdContainer.component';
import CategoryText from '../text/CategoryText.component';
import Image from 'next/image';
import HeaderText from '../text/HeaderText.component';
import SubHeaderText from '../text/SubHeaderText.component';
import SmContainer from './SmContainer.component';
import { useRouter } from 'next/navigation';

export default function SmArticleContainer(props) {

	const { artid, cat, src, alt, title, hdlnr } = props;
	const ROUTER = useRouter();

	function handleNavToArticle(e) {
		e.preventDefault();
		ROUTER.push(`articles/${artid}`);
	}

	return (
		<div className="sm:max-xl:mb-4 duration-150 hover:opacity-75">
			<FullContainer col>
				<SmContainer >
					<div className="w-full flex flex-col mr-4" onClick={(e) => { handleNavToArticle(e) }}>
						<div className="w-full mb-2">
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
						<div onClick={(e) => { handleNavToArticle(e) }}>
							<HeaderText small text={title} />
						</div>
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
