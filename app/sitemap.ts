import { MetadataRoute } from 'next'
import { GetAllDocs, GetSubLectureList } from '../contents/notionAPI'
 
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts: any = await GetAllDocs(false);

    return [
        {
            url: 'https://jalnik.vercel.app',
            lastModified: new Date(),
        },
        {
            url: 'https://jalnik.vercel.app/introduce',
            lastModified: new Date(),
        },
        {
            url: 'https://jalnik.vercel.app/lecture',
            lastModified: new Date(),
            },
        
        {
            url: 'https://jalnik.vercel.app/docs',
            lastModified: new Date(),
        }, 
        ...(await posts.results).map((post: any) => ({
            url: `https://jalnik.vercel.app/post/${encodeURIComponent(post.properties.이름.title[0].plain_text)}`,
            lastModified: `${post.last_edited_time}`,
        }))
    ]
}