import LandingSection from "./_components/sections/Landing.section";
import FeatArticles from "./_components/ui/landing/FeatArticles.component";
import LatestArticles from "./_components/ui/landing/LatestArticles.component";
import NavBar from "./_components/ui/nav/NavBar.component";
import ArticleProvider from "./_context/articles.provider";

export default function Home() {
  return (
    <main className="py-6 px-6 flex max-h-screen overflow-x-hidden overflow-y-scroll min-h-screen ">
      <NavBar />
      <ArticleProvider>
        <div className="max-w-[1540px] flex flex-col">
          <LandingSection />
          <LatestArticles />
        </div>
      </ArticleProvider>
    </main>
  );
}
