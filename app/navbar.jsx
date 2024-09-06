import React from "react";
import Link from "next/link";

export default function Navbar(){
    const navlinks = [
        {label: "Home", href:"/"},
        {label: "Leaderboards", href:"/leaderboards"}
    ]

    return(
        <nav className="h-[65px] bg-slate-800 flex">
            <ul className="flex items-center mx-5">
                <div id="search-box" className="flex bg-blue-600 rounded-[10px]">
                    <Link href="/"><img src="/FF-logo.png" alt="FF" className="w-8 h-8 p-1 m-1"></img></Link>
                    <input type="text" className="rounded-r-[10px] bg-slate-200 placeholder:italic placeholder:text-slate-400 px-4" placeholder="Search"></input>
                </div>
                {navlinks.map(link => {
                    return <li key={link.href} className="mx-3 text-slate-300"><Link href={link.href}>{link.label}</Link></li>
                })}
            </ul>
        </nav>
    )
}