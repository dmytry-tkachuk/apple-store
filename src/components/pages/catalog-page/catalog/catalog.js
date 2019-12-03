import React from 'react'

export const Catalog = ({data=[]}) => {
    return(
        <div className="catalog">
            {
                data.map((el) => {
                    return(
                        <div className={"item"} key={el.id}>
                            <div className="img">
                                <img src={el.img} alt=""/>
                            </div>
                            <div className="price">Price: {el.price}$</div>
                            <div className="model">{el.model}</div>

                        </div>
                    )
                })
            }
        </div>
    )
}