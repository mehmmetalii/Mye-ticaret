import React from "react";
import Navi from "./Navi";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { GridRow, GridColumn, Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid >
        <GridRow>
          <GridColumn width={4} >
            <Categories />
          </GridColumn>
          <GridColumn width={12} >
            <Routes>
            <Route  path="/" Component={ProductList} />
            <Route path="/products" Component={ProductList} />
            <Route path="/products/:name" Component={ProductDetail} />
            <Route path="cart" Component={CartDetail} />
            <Route path="/product/add" Component={ProductAdd} />
            </Routes>

          
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
