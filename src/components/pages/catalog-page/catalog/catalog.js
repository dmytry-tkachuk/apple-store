import React from 'react'
import {Link} from "react-router-dom";

export const Catalog = ({data=[], getCurrentDevice}) => {
    return(
        <div className="catalog">
            {
                data.map((el) => {
                    return(
                        <div onClick = {() => getCurrentDevice(el.id)} className={"item"} key={el.id}>
                            <div className="img">
                                <img src={el.img} alt=""/>
                            </div>
                            <div className="model">{el.model}</div>
                            <div className="price">Price: {el.price}$</div>
                        </div>
                    )
                })
            }
        </div>
    )
}