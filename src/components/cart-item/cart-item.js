import React, {Component} from 'react'
import "./cart-item.sass"
import {connect} from "react-redux";

class CartPage extends Component {
    render(){

        return(
            <div>Cart Item</div>
        )
    }
}

const mapStateToProps = ({currentDevice:device}) => {
    return {device}
};

const mapDispatchToProps = () => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)