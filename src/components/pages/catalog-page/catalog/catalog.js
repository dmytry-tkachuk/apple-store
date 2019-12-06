import React from 'react'
import {Link} from "react-router-dom";

export const Catalog = ({data=[], createCurrentDevice}) => {
    return(
        <div className="catalog">
            {
                data.map((el) => {
                    return(
                        <div onClick = {() => createCurrentDevice(el)} className={"item"} key={el.id}>
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