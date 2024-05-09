'use client'

import FullContainer from "../containers/FullContainer.component";
import HeaderText from "../text/HeaderText.component";
import SpotlightArticle from "../ui/landing/SpotlightArticle.component";
import FeatArticles from "../ui/landing/FeatArticles.component";
import SmContainer from "../containers/SmContainer.component";

export default function LandingSection(props) {

	return (
		<div className="flex w-full max-md:mb-8 h-fit max-xl:flex-col">
			<div className="sm:max-xl:w-full flex flex-col justify-center">
				<HeaderText landing sitetitle={"LiesThey"} text={"Tell"} />
				<FullContainer>
					<SpotlightArticle tags={['tag1', 'tag2', 'tag3', 'tag4']} />
				</FullContainer>
			</div>
			<FullContainer>
				<FeatArticles />
			</FullContainer>
		</div>
	)
}
