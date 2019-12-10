import React from 'react'
import "./app.sass"
import {Route, Switch} from "react-router-dom";
import CatalogPage from "../pages/catalog-page/catalog-page";
import HomePage from "../pages/home-page/home-page";
import {Header} from "../header/header";
import CartItemPage from "../pages/cart-item-page/cart-item-page";
import {LogInModal} from "../modals/log-in-modal/log-in-modal";

const App = () => {

    return(
        <>
            <LogInModal/>
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
                    component={CartItemPage}
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