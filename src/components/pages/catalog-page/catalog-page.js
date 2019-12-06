import React, {Component} from 'react'
import withService from "../../hoc/with-service";
import "./catalog-page.sass"
import {Catalog} from "./catalog/catalog";
import {connect} from "react-redux";
import {createCurrentDevice, fetchDevices} from "../../../actions";
import {withRouter} from "react-router-dom";

class CatalogPage extends Component {

    componentDidMount() {
        this.fetchDevices()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.id !== this.props.id){
            this.fetchDevices();
        }
    }

    fetchDevices = () => {
        const { fetchDevices, id, catalog:{data={}} } = this.props;
        if(data[this.props.id]) return;
        fetchDevices(id)
    };

    createCurrentDevice = (device) => {
        this.props.history.push(`/device/${device.id}`);
        this.props.createCurrentDevice(device)
    };

    render(){
        const {catalog: {loading, data}, id } = this.props;

        if(loading === true) return <div>Loading...</div>;

        return(
            <div className={"wrapper"}>
                <div className="wrap">
                    <Catalog data = {data[id]} createCurrentDevice = {this.createCurrentDevice}/>
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
        fetchDevices: (id) => fetchDevices(service.getDevices, dispatch, id),
        createCurrentDevice: (device) => dispatch(createCurrentDevice(device))
    }
};

export default (
    withRouter(
        withService(
            connect(mapStateToProps, mapDispatchToProps)(CatalogPage)
        )
    )
)

