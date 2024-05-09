'use client'
import { useContext, useEffect, useState } from "react"
import FullContainer from "../../containers/FullContainer.component"
import LgContainer from "../../containers/LgContainer.component"
import MdArticleContainer from "../../containers/MdArticleContainer.component"
import HeaderText from "../../text/HeaderText.component"
import RegularButton from "../../inputs/RegularButton.component"
import { articleContext } from "@/app/_context/articles.provider"
import RegularText from "../../text/RegularText.component"


export default function LatestArticles(props) {

	const [paginateCnt, setPaginateCnt] = useState(2);
	const [posts, setPosts] = useState({ data: [] });

	const loadMore = (e) => {
		e.preventDefault();
		setPaginateCnt((prev) => prev + 3);
	}

	const { articles } = useContext(articleContext);

	useEffect(() => {
		setPosts(articles);
	}, [articles])

	return (
		<div className="flex flex-col w-full h-fit">
			<HeaderText text={"The Latest"} />
			<hr className="mb-4 border-1 border-black opacity-25 w-full"></hr>
			<FullContainer>
				<div className="w-full md:px-12 md:py-6 h-full flex flex-col ">
					{posts.data.map((post, idx) => {
						if (idx <= paginateCnt) {
							return (
								<>
									<MdArticleContainer
										artid={post.id}
										key={"latest-" + idx}
										title={post.attributes.Title}
										hdlnr={post.attributes.Headliner}
										src={`http://localhost:1337${post.attributes.Media.data[0].attributes.url}`}
										alt={post.alt}
										cat={post.attributes.Category}
									/>
									<hr className="mb-4 border-1 border-black opacity-25 w-full"></hr>
								</>
							)
						}
					})}
					{paginateCnt < posts.length ?
						<RegularButton
							label="Load More..."
							clickHandler={loadMore}
						/>
						:
						<RegularText text="End of Content" />
					}

				</div>

			</FullContainer>
		</div>
	)
}
