import React from "react";
import NavBar from "./navBar";

type headerOptions = {
    title: string
}

const Header: React.FC<headerOptions> = ({title}) =>{
    
    return (
        <>
        <div>
        <h1 className="text-slate-50 ">{title ? title : 'Eugenia Gramajo'}</h1>
        <NavBar></NavBar>
        </div>
        </>
    )
}

export default Header;