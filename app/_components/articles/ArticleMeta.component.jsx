'use client'
import { useContext, useEffect, useState } from "react";
import FullContainer from "../containers/FullContainer.component"
import HeaderText from "../text/HeaderText.component"
import { articleContext } from "@/app/_context/articles.provider";
import SubHeaderText from "../text/SubHeaderText.component";
import CategoryText from "../text/CategoryText.component";


export default function ArticleMeta(props) {
	const { article_id } = props;

	const { articles } = useContext(articleContext);
	const [currentArticleTitle, setCurrentArticleTitle] = useState("");
	const [currentArticleCategory, setCurrentArticleCategory] = useState("");
	const [currentArticleAuthor, setCurrentArticleAuthor] = useState("");
	const [currentArticlePublishDate, setCurrentArticlePublishDate] = useState("");
	const [currentArticleUpdateDate, setCurrentArticleUpdateDate] = useState("");

	useEffect(() => {
		if (articles.data.length > 0) {
			let currentArticle = articles.data.filter((art) => { return art.id = article_id })
			setCurrentArticleTitle(currentArticle[0].attributes.Title);
			setCurrentArticleCategory(currentArticle[0].attributes.Category);
			setCurrentArticleAuthor("")
			setCurrentArticlePublishDate(new Date(currentArticle[0].attributes.publishedAt).toLocaleString())
		}
	}, [articles])

	return (
		<FullContainer >
			<div className="w-full flex-col">
				<CategoryText text={currentArticleCategory} />
				<HeaderText landing sitetitle={currentArticleTitle} />
				<div className="w-full flex justify-between">
					<SubHeaderText fit text={"Jay Reyes"} />
					<SubHeaderText fit text={currentArticlePublishDate} />
				</div>
			</div>
		</FullContainer>
	)
}
