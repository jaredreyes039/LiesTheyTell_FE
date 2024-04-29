'use client'

import { useEffect, useContext, useState } from "react"
import FullContainer from "../../containers/FullContainer.component"
import SmArticleContainer from "../../containers/SmArticleContainer.component"
import HeaderText from "../../text/HeaderText.component"
import SubHeaderText from "../../text/SubHeaderText.component"
import { articleContext } from "@/app/_context/articles.provider"


export default function FeatArticles(props) {

	const { articles } = useContext(articleContext);

	const FEAT_ART_SAMPLE = [
		{
			title: "My Hyprland Setup, and Community Concerns",
			hdlnr: "This is the headline for the article and can be of a variable length and should be truncated as a result.",
			src: "/landingTemp.jpg",
			alt: "Temporary article photo",
			cat: "Linux"
		},
		{
			title: "My Hyprland Setup, and Community Concerns",
			hdlnr: "This is the headline for the article and can be of a variable length and should be truncated as a result.",
			src: "/landingTemp.jpg",
			alt: "Temporary article photo",
			cat: "Linux"
		},
		{
			title: "My Hyprland Setup, and Community Concerns",
			hdlnr: "This is the headline for the article and can be of a variable length and should be truncated as a result.",
			src: "/landingTemp.jpg",
			alt: "Temporary article photo",
			cat: "Linux"
		},
	]
	return (
		<FullContainer>
			<div className="w-full h-full flex flex-col ">
				<HeaderText text={"Featured"} />
				<hr className="mb-4 border-1 border-black opacity-25 w-full"></hr>
				{articles.data.map((post, idx) => {
					if (post.attributes.Featured && idx <= 2) {
						return (
							<>
								<SmArticleContainer
									key={"feat-" + idx}
									title={post.attributes.Title}
									hdlnr={post.attributes.Headliner}
									cat={post.attributes.Category}
									src={`http://localhost:1337${post.attributes.Media.data[0].attributes.url}`}
									alt={post.attributes.Media.data[0].attributes.altText}
								/>
								<hr className="mb-4 border-1 border-black opacity-25 w-full"></hr>
							</>
						)
					}
				})}
				{FEAT_ART_SAMPLE.length < 3 &&
					<SubHeaderText text={"More coming soon..."}></SubHeaderText>
				}
			</div>
		</FullContainer>
	)
}
