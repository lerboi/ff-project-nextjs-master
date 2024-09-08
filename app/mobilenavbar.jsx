import Link from "next/link"

export default function MobileNavbar({navlinks}){
    const links = navlinks

    return(
        <div className="flex flex-col items-center justify-center bg-slate-700 h-[8rem]">
            {links.map(link => <p className="text-slate-200 my-2"><Link href={link.href}>{link.label}</Link></p>)}
        </div>
    )
}