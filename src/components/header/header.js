import React from 'react'
import './header.sass'
import {NavLink} from "react-router-dom";
import logo from './logo.png'

export const Header = () => {
    return(
        <div className={"header"}>
            <div className="container">
                <NavLink to = "/" className="logo">
                    <img src={logo} alt=""/>
                </NavLink>
                <nav>
                    <NavLink to={"/catalog/837382"} className="item">Iphone</NavLink>
                    <NavLink to={"/catalog/736726"} className="item">Ipad</NavLink>
                    <NavLink to={"/catalog/111"} className="item">MacBook</NavLink>
                    <NavLink to={"/catalog/222"} className="item">IMac</NavLink>
                    <NavLink to={"/catalog/333"} className="item">Accessories</NavLink>
                    <NavLink to={"/catalog/444"} className="item">Apple Watch</NavLink>
                </nav>
            </div>
        </div>
    )
}