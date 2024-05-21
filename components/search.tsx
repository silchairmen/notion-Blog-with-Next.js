"use client"
import { useRouter } from 'next/navigation';

export default async function SearchConsole() {
    const router = useRouter();

    const searchName = (e: any) => {
        e.preventDefault();
        const searchTerm = e.target.search.value;
        router.push(`/docs?search=${encodeURIComponent(searchTerm)}`);
    }

    return (
        <form onSubmit={searchName}>
            <div className="content-center mt-10">
                <div className="outline outline-gray-400 bg-gray-800 text-white rounded-lg">
                    <input id="searchLabel" name="search" className="text-center min-h-7 min-w-72 p-1  bg-gray-800" 
                        placeholder="search tag or docs name"/>

                    <button type="submit" className="bg-gray-800 border-l-2 border-gray-400 pl-2 pr-2">
                        <p role="img" aria-label="search">🔍</p>
                    </button>
                </div>
            </div>
        </form>
    )
    
}