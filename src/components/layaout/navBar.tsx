import React from "react";
import navBar from "@/data/navBar.json"
import Link from "next/link";

const NavBar : React.FC =()=>{
    return(
        <>
        <div className="h-14 w-[100%] bg-slate-600/35 rounded-md py-1 px-2 flex justify-center space-x-3">
            {navBar.map(a=>{
                return <Link className="text-slate-100" key={a.redirect} href={a.redirect}>{a.name}</Link>
            })}
        </div>
        </>
    )
}

export default NavBar