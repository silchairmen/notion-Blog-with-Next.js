import { GetPostId, GetPostInfo } from "../../../contents/notionAPI";
import { Metadata } from "next";
import { NotionAPI } from "notion-client";
import PostDetail from "../../../components/postDetail";


export async function generateMetadata({params:{id}}:{params:{id:string}}): Promise<Metadata> {
    const title = await GetPostId(id)
    if(title !== null){
      const info : any = await GetPostInfo(title)
      const postTitle = info.properties.이름.title[0].plain_text
      return {
        title: `${postTitle}`,
        
        openGraph: {
          title: postTitle,
        }
      }
    } else {
      return {}
    }
  }
  
  export default async function Home({params:{id}}:{params:{id:string}}) {
    const notion = new NotionAPI();
    const title = await GetPostId(id)
    if(title !==null){
      const recordMap = await notion.getPage(title);
      return (
        <main>
          <PostDetail recordMap={recordMap} />
        </main>
      );
    }
    else{
      return null
    }
  }