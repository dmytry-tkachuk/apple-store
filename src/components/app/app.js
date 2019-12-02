import React from 'react'
import "./app.sass"
import HomePage from "../pages/home-page/home-page";
import {Route, Switch} from "react-router-dom";
import CatalogPage from "../pages/catalog-page/catalog-page";
import withService from "../hoc/with-service";
import withData from "../hoc/with-data";

const App = ({service}) => {

    const Catalog = withData(CatalogPage, service.getIphones);

    return(
        <Switch>
            <Route
                path={"/"}
                render={() => {
                    return <HomePage/>
                }}
                exact
            />
            <Route
                path={"/catalog/iphones"}
                render={() => {
                    return <Catalog />
                }}
                exact
            />
            <Route
                render={() => {
                    return <div>Not found</div>
                }}
            />
        </Switch>
    )
};

export default withService(App)