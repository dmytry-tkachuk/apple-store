import React from 'react'
import './header.sass'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return(
        <div className={"header"}>
            <div className="wrap">
                <NavLink to={"/catalog/837382"} className="item">Iphone</NavLink>
                <NavLink to={"/catalog/736726"} className="item">Ipad</NavLink>
                <NavLink to={"/catalog/"} className="item">MacBook</NavLink>
                <NavLink to={"/catalog/"} className="item">IMac</NavLink>
                <NavLink to={"/catalog/"} className="item">Accessories</NavLink>
                <NavLink to={"/catalog/"} className="item">Apple Watch</NavLink>
            </div>
        </div>
    )
}