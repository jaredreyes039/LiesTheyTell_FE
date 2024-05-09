'use server'
import { remark } from 'remark';
import html from 'remark-html';
const fs = require('fs')

export default async function ArticleContent(props) {
	const fileContents = fs.readFileSync(`./public/${props.slug}`, 'utf8')

	async function getContent() {
		const processedContent = await remark()
			.use(html)
			.process(fileContents)
		const contentHtml = processedContent.toString();
		return contentHtml
	}
	const content = await getContent();

	return (
		<div dangerouslySetInnerHTML={{ __html: content }} className="art-content">
		</div>
	)
}
