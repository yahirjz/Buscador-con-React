import React from "react";
import {Routes, Route } from "react-router-dom";
//import pages
import { HomePage } from "../pages/HomePage";
import SearchResultPage from "../pages/SearchResultPage";
//import { ProductDetailPage } from "../pages/ProductDetail";
import { Layout } from "../components/Layout";


export function AppRoutes(){
    return(
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage/>}/>
                <Route path="/search/:query" element={<SearchResultPage/>}/>
                {/*<Route path="item/:id" element={<ProductDetailPage />} />*/}
            </Route>
        </Routes>
    )
}