"use client";

import CategoryView from "@/app/_components/ui/category/CategoryView.component";
import NavBar from "@/app/_components/ui/nav/NavBar.component";
import ArticleProvider from "@/app/_context/articles.provider";
import { useParams } from "next/navigation";

export default function CategoryPage(props) {
  const { category } = useParams();

  return (
    <main className="py-6 px-6 flex max-h-screen overflow-x-hidden overflow-y-scroll min-h-screen ">
      <NavBar />
      <ArticleProvider>
        <CategoryView category={category} />
      </ArticleProvider>
    </main>
  );
}
