import React, {Component} from 'react'
import {connect} from "react-redux";
import "./cart-item-page.sass"

class CartItemPage extends Component {
    render(){
        const {device} = this.props;
        return(
            <div className = {"product-cart"}>
                <div className="wrap">
                    <div className="page-title">Product Cart</div>
                    <div className="container">
                        <div className="img">
                            <img src={device.img} alt=""/>
                        </div>
                        <div className="content">
                            <div className="item model">{device.model}</div>
                            <div className="item price">Price: <span>{device.price}$</span></div>
                            <div className="item desc">{device.description}</div>
                            <button className="item button">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({currentDevice:device}) => {
    return {device}
};

const mapDispatchToProps = () => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemPage)