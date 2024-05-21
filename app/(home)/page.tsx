import { Suspense } from "react";
import Animation from "../../components/gostAnimation";
import CountVisit from "./visit";
import RecentPostList from "./RecentPost";
import { Metadata } from "next";
import { revalidatePath } from "next/cache"

export const metadata : Metadata = {
  title : "Jalnik Blog",
  description : "Main homepage"

}

export default async function Home() {
  revalidatePath('/', 'layout')

  return (
    <section className="flex min-h-screen flex-col body-font px-10">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-end">
          <Animation />
        </div>
       <CountVisit />
      </div>
      <p className="flex mx-auto items-cente text-blue-400 font-bold text-2xl mb-2">Recent Post
        <span className="animate-bounce">
          &#160;⬇️
        </span>
      </p>
      <Suspense>
        <RecentPostList />
      </Suspense>
    </section>
  )
}