'use client'

import { useRouter } from "next/navigation";
import FullContainer from "../containers/FullContainer.component";
import AttentionButton from "../inputs/AttentionButton.component";
import RegularButton from "../inputs/RegularButton.component";
import HeaderText from "../text/HeaderText.component";
import SubHeaderText from "../text/SubHeaderText.component";
import LandingImage from "../ui/landing/LandingImage.component";
import MdContainer from "../containers/MdContainer.component";
import SpotlightArticle from "../ui/landing/SpotlightArticle.component";
import LgContainer from "../containers/LgContainer.component";
import FeatArticles from "../ui/landing/FeatArticles.component";
import SmContainer from "../containers/SmContainer.component";

export default function LandingSection(props) {

	const ROUTER = useRouter();

	const HEADTEXT = "Desert Dev";
	const SUBTEXT = "A blog dedicated to the trials and tribulations of being a work-from-home software engineer and hobbyist computer nerd!";

	async function goToArticles(e) {
		e.preventDefault();
		ROUTER.push("/articles");
	}

	function openSubscriptionModal(e) {
		e.preventDefault();
		console.log("Opening subscription modal...")
	}

	return (
		<FullContainer center>
			<div className="w-2/3 flex flex-col justify-center">
				<HeaderText landing sitetitle={"DEV."} text={"LOG"} />
				<FullContainer>
					<SpotlightArticle tags={['tag1', 'tag2', 'tag3', 'tag4']} />
				</FullContainer>
			</div>
			<SmContainer>
				<FeatArticles />
			</SmContainer>
		</FullContainer>
	)
}
