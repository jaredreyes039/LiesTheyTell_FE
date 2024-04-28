'use client'
import { useEffect, useState } from "react"
import FullContainer from "../../containers/FullContainer.component"
import LgContainer from "../../containers/LgContainer.component"
import MdArticleContainer from "../../containers/MdArticleContainer.component"
import HeaderText from "../../text/HeaderText.component"
import RegularButton from "../../inputs/RegularButton.component"


export default function LatestArticles(props) {

	const [paginateCnt, setPaginateCnt] = useState(2);
	const [posts, setPosts] = useState([]);

	const loadMore = (e) => {
		e.preventDefault();
		setPaginateCnt((prev) => prev + 3);
	}

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

	useEffect(() => {
		setPosts(FEAT_ART_SAMPLE);
	}, [])

	useEffect(() => {
		console.log("Call")
		let newPosts = [
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
		newPosts.forEach((post) => {
			setPosts((prev) => [...prev, post]);
		})
	}, [paginateCnt])


	return (
		<div className="flex flex-col w-full h-fit">
			<HeaderText text={"The Latest"} />
			<hr className="mb-4 border-1 border-black opacity-25 w-full"></hr>
			<FullContainer>
				<div className="w-full px-12 py-6 h-full flex flex-col ">
					{posts.map((post, idx) => {
						if (idx <= paginateCnt) {
							return (
								<>
									<MdArticleContainer
										key={"latest-" + idx}
										title={post.title}
										hdlnr={post.hdlnr}
										src={post.src}
										alt={post.alt}
										cat={post.cat}
									/>
									<hr className="mb-4 border-1 border-black opacity-25 w-full"></hr>
								</>
							)
						}
					})}
					<RegularButton
						label="Load More..."
						clickHandler={loadMore}
					/>
				</div>

			</FullContainer>
		</div>
	)
}
