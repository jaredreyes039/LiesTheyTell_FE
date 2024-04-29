import Image from "next/image";
import FullContainer from "../../containers/FullContainer.component";
import MdContainer from "../../containers/MdContainer.component";
import SubHeaderText from "../../text/SubHeaderText.component";
import HeaderText from "../../text/HeaderText.component";
import RegularText from "../../text/RegularText.component";
import CategoryText from "../../text/CategoryText.component";
import LgArticleContainer from "../../containers/LgArticleContainer.component";
import { useContext } from "react";
import { articleContext } from "@/app/_context/articles.provider";


export default function SpotlightArticle(props) {


	const { spotlight } = useContext(articleContext);
	console.log(spotlight)
	const SAMPLE_ART = {
		title: "My Hyprland Setup, and Community Concerns",
		hdlnr: "This is the headline for the article and can be of a variable length and should be truncated as a result.",
		src: "/landingTemp.jpg",
		alt: "Temporary article photo",
		cat: "Linux"
	}

	return (
		<div className="h-fit px-12 py-6">
			{spotlight.data.length > 0 && <LgArticleContainer
				title={spotlight.data[0].attributes.Title}
				hdlnr={spotlight.data[0].attributes.Headliner}
				src={`http://localhost:1337${spotlight.data[0].attributes.Media.data[0].attributes.url}`}
				alt={spotlight.data[0].attributes.Media.data[0].attributes.altText}
				cat={spotlight.data[0].attributes.Category}
			/>}
		</div>
	);
}
