"use client"

import CategoryList from "./_components/categoryList";
import { EmblaCarousel } from "./_components/banner";
import Caterers from "./_components/caterers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between my-20 px-4 md:px-8 xl:px-16">
      <div className="flex flex-col">
      
      <CategoryList/>
      <Caterers/>
      </div>
    </main>
  );
}
