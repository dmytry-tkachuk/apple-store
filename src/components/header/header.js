import React from 'react'
import './header.sass'
import {NavLink} from "react-router-dom";
import logo from './logo.png'
import {openLoginModal} from "../../actions";
import withService from "../hoc/with-service";
import {connect} from "react-redux";

const Header = ({openLoginModal, user}) => {
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
                {
                    user?
                        <div className="login" >Hello, {user.first_name}</div>
                        :
                        <div className="login" onClick={openLoginModal}>
                            Sign In
                            <i className="fas fa-sign-in-alt"></i>
                        </div>
                }

                <NavLink to = {"/shopping-cart"} className="cart-item">
                    <div className="sum">0$</div>
                    <i className="fas fa-shopping-cart"></i>
                    <div className="count">0</div>
                </NavLink>
            </div>
        </div>
    )
};

const mapStateToProps = ({user}) => {
    return {user}
};

const mapDispatchToProps = (dispatch) => {
    return {
        openLoginModal: () => dispatch(openLoginModal())
    }
};

export default (
        withService(
            connect(mapStateToProps, mapDispatchToProps)(Header)
        )
)

