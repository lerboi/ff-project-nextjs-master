"use client"
import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FiAlignJustify } from "react-icons/fi";
import MobileNavbar from "./mobilenavbar";

export default function Navbar(){
    const navlinks = [
        {label: "Home", href:"/"},
        {label: "Leaderboards", href:"/leaderboards"}
    ]

    function handleNav(){
        console.log("hello")
    }

    return(
        <>
        <nav className="h-[70px] bg-slate-900 sticky z-50 flex items-center">
            <ul className="flex items-center mx-5 row-span-3 w-full flex-shrink-0">
                <div id="search-box" className="flex bg-slate-700 rounded-[10px]">
                    <Link href="/"><img src="/FF-logo.png" alt="FF" className="w-8 h-8 p-1 m-1"></img></Link>
                    <input type="text" className="rounded-r-[10px] bg-slate-200 placeholder:text-slate-400 w-[10rem] pl-8" placeholder="Search"></input>
                    <CiSearch className="absolute ml-[3rem] w-5 h-5 my-[9px]"/>
                </div>
                <div className="md:block md:flex hidden">
                    {navlinks.map(link => {
                        return <li key={link.href} className="hover:text-white transition-all ease-in-out mx-3 text-slate-300"><Link href={link.href}>{link.label}</Link></li>
                    })}
                </div>
                <div className="flex items-center mx-4 md:hidden">
                    <FiAlignJustify onClick={handleNav} className="text-white mx-3 absolute right-0 text-3xl"/>
                </div>
            </ul>
            <div className="w-full absolute top-[-170px]">
                <MobileNavbar navlinks={navlinks} />
            </div>
        </nav>
        </>
        
    )
}