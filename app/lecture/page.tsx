import Link from "next/link";
import LectureSection from "./lectureSection";
import { revalidatePath } from "next/cache";
import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Lecture",
    description : "Lecture section"
  
  }


//강좌 형식으로 제작된 콘텐츠를 나열할 수 있도록 함
export default function Category(){
    revalidatePath('/lecture', 'layout');

    return(
        <section className="min-h-screen flex justify-center items-center">
            <div className="max-w-screen-lg">
                <div className="flex flex-col text-left mt-16 sm:mx-10">
                    <h1 className="text-white text-left text-4xl font-bold">Lecture 📕</h1>
                    <span className="mt-3 text-white text-left">해당 카테고리를 클릭하시면, 카테고리에 해당하는 문서들을 보실 수 있습니다. <br></br> 
                    여기서 나열하는 내용은 기초~중급 수준이며 해당 분야에 대한 모든 
                    글을 보고 싶으시면 <Link className=" text-blue-300" href={"/docs"}>여기</Link>를 누르시면 됩니다.</span>
                </div>
                <div className="flex flex-col text-left mt-16 sm:mx-10">
                    <LectureSection />
                </div>
            </div>
        </section>

    )
}