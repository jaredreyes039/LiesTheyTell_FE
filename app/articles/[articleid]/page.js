import ArticleContent from "@/app/_components/articles/ArticleContent.component";
import ArticleMeta from "@/app/_components/articles/ArticleMeta.component";
import ArticlePage from "@/app/_components/articles/ArticlePage.component";
import NavBar from "@/app/_components/ui/nav/NavBar.component";
import ArticleProvider from "@/app/_context/articles.provider";

function Article({ params }) {
  const article_id = params.articleid;

  return (
    <main className="py-6 px-6 flex max-h-screen overflow-x-hidden overflow-y-scroll min-h-screen ">
      <NavBar />
      <ArticleProvider>
        <ArticlePage>
          <ArticleMeta article_id={article_id} />
          <ArticleContent slug={`/posts/post_${article_id}.md`} />
        </ArticlePage>
      </ArticleProvider>
    </main>
  );
}

export default Article;
