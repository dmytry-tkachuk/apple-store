import React, {Component} from 'react'
import withService from "../../hoc/with-service";

class CatalogPage extends Component {

    render(){
        const { data } = this.props;

        return(
            <div className={"wrapper"}>
                <div className="wrap">
                    <div className="catalog">
                        {
                            data.map((el) => {
                                return(
                                    <div className={"item"} key={el.id}>
                                        <div className="model">{el.model}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withService(CatalogPage)