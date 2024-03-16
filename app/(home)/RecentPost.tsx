import PreViewCard from "../../components/PreViewCard"
import { GetRecentPosts } from "../../contents/notionAPI"


export default async function RecentPostList() {
    const size = 4;
    const posts = await GetRecentPosts(size);
    
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-5 m-6 gap-x-12 gap-y-16">
                {posts.results.map((post: any, index:any) => (
                    <PreViewCard key={index} post={post}/>
                ))}
        </div>
    )
}