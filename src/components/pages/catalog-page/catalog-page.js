import React, {Component} from 'react'
import withService from "../../hoc/with-service";
import "./catalog-page.sass"
import {Catalog} from "./catalog/catalog";
import {connect} from "react-redux";
import {fetchDevices} from "../../../actions";

class CatalogPage extends Component {

    componentDidMount() {
        this.props.fetchDevices()
    }


    render(){
        const {catalog: {loading, data} } = this.props;

        if(loading === true) return <div>Loading...</div>;

        return(
            <div className={"wrapper"}>
                <div className="wrap">
                    <Catalog data = {data} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({catalog}) => {
    return {catalog}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {service} = ownProps;
    return {
        fetchDevices: () => fetchDevices( service.getIphones,dispatch)
    }
}

export default withService(connect(mapStateToProps, mapDispatchToProps)(CatalogPage))