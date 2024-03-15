

import { Suspense } from "react";
import PostCounter from "../../components/postCounter";

export default async function CountVisit() {
  
  //현재 몇개의 docx가 있는지 return함
  //postCount = await GetPostCount(); 

  return (
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-3 text-white animate-bounce">Hello, I'm JalniK.</h1>
        <h3 className="sm:text-1xl text-1xl text-white">This blog is about information security. Some posts are written like a roadmap.<br/>Please enjoy 🐳</h3>
        <h3 className="sm:text-1xl text-1xl text-white"></h3>
        <br></br>

        <Suspense fallback={<h3 className="text-1xl text-cyan-500 font-bold ">Total docx in blog : 🎁</h3>}>
          <PostCounter />
        </Suspense>
      </div> 
  )
}