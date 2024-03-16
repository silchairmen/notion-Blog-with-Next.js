import { Metadata } from "next"
import { GetAllDocs } from "../../contents/notionAPI"
import PreViewCard from "../../components/PreViewCard";
import SearchConsole from "../../components/search";

export const metadata: Metadata = {
    title: 'blog-AllDocx',
    description: "All document in blog",
  }
  
export default async function Docs(search: any) {
  
  //모든 글을 가져옴
    const posts : any = await GetAllDocs(search);
      return(
      
        <div className="flex flex-col items-center min-h-screen px-5 py-10 mb-10">
          <div className="md:grid xl:grid-cols-5 md:grid-cols-3 sm:flex-col sm:flex">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-600 xl:col-start-3 md:col-start-2 text-center">
                All Documents
              </h1>
              
            </div>
            <SearchConsole />
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 py-10 m-6 gap-x-12 gap-y-16">
              {posts.results.map((post:any, index:any) => (
                  <PreViewCard key={index} data={post}/>
                ))}
          </div>
        </div>
      )
    }