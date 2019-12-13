import React from 'react'
import './shop-cart-page.sass'

const ShopCartPage = () => {
    return(
        <div className={"wrapper"}>
            <div className={"wrap"}>
                <table border="1">
                    <tbody>
                    <tr>
                        <th>#</th>
                        <th>Model</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{item.model}</td>
                        <td><img src={item.img} alt=""/></td>
                        <td>{item.description}</td>
                        <td>1(count)</td>
                        <td>{item.price}</td>
                        <td className = "actions-td">
                            <span className = {"decrement action"}><i className="far fa-minus-square"></i></span>
                            <span className = {"delete action"}><i className="far fa-trash-alt"></i></span>
                            <span className = {"increment action"}><i className="far fa-plus-square"></i></span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className = {"total"}>Total: 500$</div>
                <div className="button-container">
                    <div className="clearCart button">Clear cart</div>
                    <div className="makeOrder button">Make order</div>
                </div>
            </div>
        </div>
    )
};

export default ShopCartPage

const item = {
    category: "iphone",
    id: 1002,
    model: "Smartphone Apple iPhone 11 Pro Max 64GB Midnight Green (MWH22)",
    description: "Screen: 6.5 OLED (2688x1242) / Processor: six-core Apple A13 Bionic / Camera: 12 + 12 + 12 MP + 12 MP / OS: iOS 13 / Internal memory: 64 GB / RAM: 6 GB / LTE / GPS, GLONASS , BDS, GALILEO / Dimensions: 158x77.8x8.1 mm / Weight: 226 g",
    price: "1500",
    img: "https://avic.ua/assets/cache/images/assets/files/products/218501/image/200x220-apple-iphone-11-pro-max-midnight-green-1.jpg",
    stoсkPrice: null
};