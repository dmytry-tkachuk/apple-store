import React from 'react'
import "./app.sass"
import {Route, Switch} from "react-router-dom";
import CatalogPage from "../pages/catalog-page/catalog-page";
import withService from "../hoc/with-service";
import HomePage from "../pages/home-page/home-page";

const App = () => {

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
                    return <CatalogPage  />
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