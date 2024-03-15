import { usePathname } from "next/navigation";
import { GetSubLectureList } from "../../../contents/notionAPI"
import PreViewCard from "../../../components/PreViewCard";


export default async function SubLecturePage(subLectureName: any){

    const lectureName = subLectureName.searchParams.subLectureName

    const subLectures = await GetSubLectureList(lectureName);




    return (
        <div className="min-h-screen content-center mx-10 mt-10">
            <h1 className="text-4xl shadow-2xl bg-gray-800 outline outline-gray-300 rounded-lg md:text-5xl py-3 font-bold text-gray-300 font-mono xl:col-start-3 mx-9 md:col-start-2 text-center mb-15">
                {lectureName}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-5 m-6 gap-x-12 gap-y-16">
                {subLectures.results.map((post: any, index:any) => (
                    <PreViewCard key={index} post={post}/>
            ))}
        </div>
        </div>
    )
}