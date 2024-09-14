"use client"
import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "@/components/Popup";


export default function Navbar({params}){
    const navlinks = [
        {label: "Home", href:"/"},
        {label: "Leaderboards", href:"/leaderboard"},
        {label: "About" , href:"/about"}
    ]

    const [popup, setPopup] = useState(false)
    const [navopen, setnavopen] = useState(false)

    return(
        <>
        <div className="bg-slate-800 py-4 sticky">
            <nav className="ml-3">
                <ul className="md:flex md:items-center md:justify-start">
                    <div id="search_box_container" className="w-[200px] m-0 p-0 flex-shrink-0">
                        <div id="search-box" className="flex bg-slate-700 rounded">
                            <Link href="/"><img src="/FF-logo.png" alt="FF" className="w-8 h-8 p-1 m-1"></img></Link>
                            <div onClick={() => setPopup(!popup)} className="rounded-r-[10px] bg-slate-200 placeholder:text-slate-400 w-[10rem] pl-8 cursor-pointer"><p className="flex text-slate-500 relative justify-left items-center top-[7px]">Search</p></div>
                            <CiSearch className="absolute ml-[3rem] w-5 h-5 my-[9px]"/>
                        </div>
                    </div>
                    
                    <div className={`md:flex bg-slate-800 w-full left-0 absolute md:static transition-all ease-in-out md:opacity-100 opacity-0 duration-500 ${navopen ? "top-[70px] opacity-100" : "top-[-200px]" }`}>
                        {navlinks.map(link => {
                            return <li key={link.href} className="hover:text-white hover:border-b-2 hover:border-b-slate-300 my-4 md:my-0 transition-all ease-in-out mx-3 text-slate-300"><Link href={link.href}>{link.label}</Link></li>
                        })}
                    </div>
                    <GiHamburgerMenu className="text-white absolute md:hidden right-0 top-0 m-6 text-2xl" onClick={() => setnavopen(!navopen)}/>
                </ul>
            </nav>
        </div>
        <div>
            {popup ? <Popup setPopup={setPopup}/> : ""}
        </div>
        </>
        
    )
}