import Image from "next/image";
import FullContainer from "../../containers/FullContainer.component";
import MdContainer from "../../containers/MdContainer.component";
import SubHeaderText from "../../text/SubHeaderText.component";
import HeaderText from "../../text/HeaderText.component";
import RegularText from "../../text/RegularText.component";
import CategoryText from "../../text/CategoryText.component";
import LgArticleContainer from "../../containers/LgArticleContainer.component";


export default function SpotlightArticle(props) {

	const SAMPLE_ART = {
		title: "My Hyprland Setup, and Community Concerns",
		hdlnr: "This is the headline for the article and can be of a variable length and should be truncated as a result.",
		src: "/landingTemp.jpg",
		alt: "Temporary article photo",
		cat: "Linux"
	}

	return (
		<div className="h-fit px-12 py-6">
			<LgArticleContainer
				title={SAMPLE_ART.title}
				hdlnr={SAMPLE_ART.hdlnr}
				src={SAMPLE_ART.src}
				alt={SAMPLE_ART.alt}
				cat={SAMPLE_ART.cat}
			/>
		</div>
	);
}
