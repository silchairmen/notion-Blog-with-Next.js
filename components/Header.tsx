"use client"


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header () {
    const path = usePathname();

    const [showMenu, setShowMenu] = useState(false);

    //navbar 부분
    return (
        <header className="text-gray-600 body-font drop-shadow-md">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                {/* 햄버거 아이콘 */}
                <button className="md:hidden ml-auto" onClick={() => setShowMenu(!showMenu)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                {/* 드롭다운 메뉴 */}
                <nav className={`md:ml-auto md:mr-auto md:flex md:flex-wrap items-center text-base ${showMenu ? '' : 'hover:border-b-2 border-transparent hover:border-emerald-400'} py-3 ${showMenu ? 'block' : 'hidden'}`}>
                    <Link href="/" className={`block md:inline-block md:mt-0 mr-5 text-white py-2 px-4 hover:text-emerald-400 transition duration-300  ${showMenu ? '' : 'hover:animate-ping'}`}>Home { path === "/" ? "👻" : ""}</Link>
                    <Link href="/introduce" className={`block md:inline-block md:mt-0 mr-5 text-white font-bold py-2 px-4 rounded hover:text-emerald-400 transition duration-300 ${showMenu ? '' : 'hover:animate-ping'}`}>Introduce { path.startsWith("/intro") ? "👻" : ""}</Link>
                    <Link href="/lecture" className={`block md:inline-block md:mt-0 mr-5 text-white font-bold py-2 px-4 rounded hover:text-emerald-400 transition duration-300 ${showMenu ? '' : 'hover:animate-ping'}`}>Lecture { path.startsWith("/lecture") ? "👻" : ""}</Link>
                    <Link href="/docs" className={`block md:inline-block md:mt-0 mr-5 text-white font-bold py-2 px-4 rounded hover:text-emerald-400 transition duration-300 ${showMenu ? '' : 'hover:animate-ping'}`}>AllDocs { path.startsWith("/docs") || path.startsWith("/post") ? "👻" : ""}</Link>
                </nav>
            </div>
        </header>


    )
}
