import React from "react";

import Head from "../head";
import Header from "../header";
import BasketTable from "./basketPageComponents/basketTable";

const BasketPage = () => {
    return (
        <div>
            <Head  title='basket'/> 
            <Header /> 
            <BasketTable />
        </div>
    )
}

BasketPage.propTypes = {}

export default BasketPage