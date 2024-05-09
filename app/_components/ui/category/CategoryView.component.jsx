import { articleContext } from "@/app/_context/articles.provider";
import { useContext, useEffect, useState } from "react";
import HeaderText from "../../text/HeaderText.component";
import FullContainer from "../../containers/FullContainer.component";
import MdArticleContainer from "../../containers/MdArticleContainer.component";
import RegularButton from "../../inputs/RegularButton.component";
import RegularText from "../../text/RegularText.component";


export default function CategoryView(props) {
	const { category } = props;
	const [paginateCnt, setPaginateCnt] = useState(2);
	const [posts, setPosts] = useState([]);

	const loadMore = (e) => {
		e.preventDefault();
		setPaginateCnt((prev) => prev + 3);
	};

	const { articles } = useContext(articleContext);

	useEffect(() => {
		if (articles.data.length > 0) {
			let filteredArticles = articles.data.filter((post) => {
				return post.attributes.Category.toLowerCase() === category;
			})
			setPosts(filteredArticles);
		}
	}, [articles]);

	return (
		<div className="flex flex-col">
			<HeaderText text={category.toUpperCase()} />
			<hr className="mb-4 border-1 border-black opacity-25 w-full"></hr>
			<FullContainer>
				<div className="w-full px-12 py-6 h-full flex flex-col ">
					{posts.map((post, idx) => {
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
							);
						}
					})}
					{paginateCnt < posts.length ? (
						<RegularButton label="Load More..." clickHandler={loadMore} />
					) : (
						<RegularText text="End of Content" />
					)}
				</div>
			</FullContainer>
		</div>
	);

}
