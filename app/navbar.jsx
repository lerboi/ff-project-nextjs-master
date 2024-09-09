"use client"
import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar(){
    const navlinks = [
        {label: "Home", href:"/"},
        {label: "Leaderboards", href:"/leaderboards"},
        {label: "About" , href:"/about"}
    ]

    const [navopen, setnavopen] = useState(false)

    function handleNav(){
        console.log("hello")
    }

    return(
        <>
        <div className="bg-slate-800 py-4 sticky">
            <nav className="ml-3">
                <ul className="md:flex md:items-center md:justify-start">
                    <div id="search_box_container" className="w-[200px] m-0 p-0 flex-shrink-0">
                        <div id="search-box" className="flex bg-slate-700 rounded">
                            <Link href="/"><img src="/FF-logo.png" alt="FF" className="w-8 h-8 p-1 m-1"></img></Link>
                            <input type="text" className="rounded-r-[10px] bg-slate-200 placeholder:text-slate-400 w-[10rem] pl-8" placeholder="Search"></input>
                            <CiSearch className="absolute ml-[3rem] w-5 h-5 my-[9px]"/>
                        </div>
                    </div>
                    
                    <div className={`md:flex bg-slate-800 w-full left-0 absolute md:static transition-all ease-in-out md:opacity-100 opacity-0 duration-500 ${navopen ? "top-[70px] opacity-100" : "top-[-200px]" }`}>
                        {navlinks.map(link => {
                            return <li key={link.href} className="hover:text-white my-4 md:my-0 transition-all ease-in-out mx-3 text-slate-300"><Link href={link.href}>{link.label}</Link></li>
                        })}
                    </div>
                    <GiHamburgerMenu className="text-white absolute md:hidden right-0 top-0 m-6 text-2xl" onClick={() => setnavopen(!navopen)}/>
                </ul>
            </nav>
        </div>
        
        </>
        
    )
}