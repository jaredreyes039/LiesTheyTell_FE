'use client'
import { createContext, useContext, useEffect, useState } from "react";

export const articleContext = createContext()


export default function ArticleProvider(props) {

	const [articles, setArticles] = useState({ data: [] });
	const [spotlight, setSpotlight] = useState({ data: [] })


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

	useEffect(() => {
		let spotlight = articles.data.filter((post) => {
			return post.attributes.Featured
		})
		setSpotlight({ data: spotlight })
	}, [articles])


	return (
		<articleContext.Provider value={{
			articles,
			spotlight
		}}>
			{props.children}
		</articleContext.Provider>
	)
}
