"use client"

import Image from "next/image";
import Link from "next/link";

export default function PreViewCard(post: any){

    // 글의 제목이나 태그가 없는경우 문제가 생김 에러처리 필요
    try {
        const title = post.data?.properties.이름.title[0].plain_text ?? post.post.properties.이름.title[0].plain_text ?? null
        const cover = post.data?.cover.external.url ?? post.post?.cover.external.url ?? null
        const tags = post.data?.properties.태그.multi_select ?? post.post?.properties.태그.multi_select ?? null
        const date = post.data?.properties.생성일.created_time ?? post.post?.properties.생성일.created_time ?? null
        const public_url = post.data?.public_url ?? post.post?.public_url ??null

        if(public_url != null){
            return(
                <div className='flex items-center justify-center transition ease-in-out hover:-translate-y-2'>
                    <div className=' mx-auto rounded-2xl shadow-xl'>
                        <div className="grid rounded-2xl max-w-[300px] max-h-[390px] shadow-sm bg-newgray flex-col">
                            <Link href={`/post/${title}`}>                
                                <Image
                                    src={cover}
                                    width="375"
                                    height="100"
                                    className="rounded-t-xl justify-center grid h-40 object-none"
                                    alt="movie.title"
                                    />
                            </Link>
                            <div className="group py-2 px-3 grid z-10 min-h-[110px]">
                                <Link href={`/post/${title}`}>                
                                    <div className="flex min-h-[60px]">
                                        <span className="py-2 font-bold text-md text-white">{title.length > 28 ? `${title.substring(0, 28)}...` : title}</span>
                                    </div>
                                </Link>
                                <div className="flex py-1">
                                {tags.map((tag: any,) => ( 
                                    <Link key={tag.id} href={`/post?search=${tag.name}`}>
                                        <span className="px-1 mr-2 text-gray-400 bg-black bg-opacity-30 rounded-md text-xs md:text-sm  hover:text-black hover:bg-gray-200 hover:bg-opacity-70 hover:font-bold">{tag.name}</span>        
                                    </Link>       
                                ))}
                                </div>
                            </div>
                        <div className="items-center border-t border-linegray p-1">
                            <span className="text-xs text-gray-400 px-3">Last Date : {date.split('T')[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className='flex items-center justify-center transition ease-in-out hover:-translate-y-2'>              
                        <div className=' mx-auto rounded-2xl shadow-xl'>
                            <div className="grid rounded-2xl max-w-[300px] max-h-[390px] shadow-sm bg-newgray flex-col">
                        <Image
                            src={cover}
                            width="375"
                            height="100"
                            className="rounded-t-xl justify-center grid h-40 object-none"
                            alt="movie.title"
                            />
                        <div className="group py-2 px-3 grid z-10">
                            <span className="py-2 font-bold text-md line-clamp-1 text-white">{title}</span>
                            <div className="flex py-1">
                            {tags.map((tag: any,) => (
                                <Link key={tag.id} href={`/post?search=${tag.name}`}>
                                    <span className="px-1 mr-2 text-gray-400 bg-black bg-opacity-30 rounded-md text-xs md:text-sm  hover:text-black hover:bg-gray-200 hover:bg-opacity-70 hover:font-bold">{tag.name}</span>        
                                </Link>        
                            ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-linegray p-1">
                            <span className="text-xs text-gray-400 px-3">{date.split('T')[0]}</span>
                            <span className="px-3">🔒</span>
                        </div>
                        </div>
                    </div>
                </div>
            )
        }
        
    } catch (error) {
        return (
            <div className='flex items-center justify-center transition ease-in-out hover:-translate-y-2'>
            <div className=' mx-auto rounded-2xl shadow-xl'>
                <div className="grid rounded-2xl max-w-[300px] max-h-[390px] shadow-sm bg-newgray flex-col">
                    <span className=" text-2xl text-red-700">현재 페이지 오류❗</span>
                </div>
            </div>
        </div>
        )
    }

    
}