import React from 'react'
import "./app.sass"
import {Route, Switch} from "react-router-dom";
import CatalogPage from "../pages/catalog-page/catalog-page";
import HomePage from "../pages/home-page/home-page";
import {Header} from "../header/header";
import CartPage from "../cart-item/cart-item";

const App = () => {

    return(
        <>
            <Header/>
            <Switch>
                <Route
                    path={"/"}
                    component={HomePage}
                    exact
                />
                <Route
                    path={"/catalog/:id"}
                    render={({match}) => {
                        return <CatalogPage id = {match.params.id}  />
                    }}
                    exact
                />
                <Route
                    path={"/device/:id"}
                    component={CartPage}
                    exact
                />
                <Route
                    render={() => {
                        return <div>Not found</div>
                    }}
                />
            </Switch>
        </>
    )
};

export default App