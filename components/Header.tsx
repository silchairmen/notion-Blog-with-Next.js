"use client"


import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header () {
    const path = usePathname();

    //navbar 부분
    return (
        <header className="text-gray-600 body-font drop-shadow-md">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hover:border-b-2 border-transparent hover:border-emerald-400 py-3">
                <Link href="/" className="mr-5 hover:text-emerald-400 hover:scale-110 hover:animate-ping text-white py-2 px-4">Home { path === "/" ? "👻" : ""}</Link>
                <Link href="/introduce" className="mr-5 hover:text-emerald-400 hover:scale-110 hover:animate-ping text-white font-bold py-2 px-4 rounded">Introduce { path.startsWith("/intro") ? "👻" : ""}</Link>
                <Link href="/lecture" className="mr-5 hover:text-emerald-400 hover:scale-110 hover:animate-ping text-white font-bold py-2 px-4 rounded">Lecture { path.startsWith("/lecture") ? "👻" : ""}</Link>
                <Link href="/docs" className="mr-5 hover:text-emerald-400 hover:scale-110 hover:animate-ping text-white font-bold py-2 px-4 rounded">AllDocs { path.startsWith("/docs") || path.startsWith("/post") ? "👻" : ""}</Link>
                </nav>
            </div>
        </header>
    )
}
