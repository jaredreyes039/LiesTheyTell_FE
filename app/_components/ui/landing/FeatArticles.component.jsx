'use client'

import { useEffect, useState } from "react"
import FullContainer from "../../containers/FullContainer.component"
import SmArticleContainer from "../../containers/SmArticleContainer.component"
import HeaderText from "../../text/HeaderText.component"
import SubHeaderText from "../../text/SubHeaderText.component"


export default function FeatArticles(props) {

	const [articles, setArticles] = useState({ data: [] });

	async function fetchArticles() {
		await fetch("http://localhost:1337/api/articles?populate=Media", {
			header: {
				"Authorization": "Bearer 155d3a3b7ed653aa03ed819d2a1a98a35db1e23080a20a28ef025fde160c037d29981884685079783cd656b8b561eadc18d1f49b667f16c533513b4ddd0a6da7073776fb08db0e26afa497e3e13af4dfd07aa0aa89057e8a65923ee57f994988ce85a5603bcfaa3cff496d102c4ee1aa0a74414e50b3309706635170d40fd982"
			}
		})
			.then((res) => { return res.json() })
			.then((data) => { setArticles(data) })
	}


	useEffect(() => {
		fetchArticles();
	}, [])

	useEffect(() => { console.log(articles) }, [articles])

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
