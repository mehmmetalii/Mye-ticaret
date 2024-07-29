import React from "react";

import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { GridRow, GridColumn, Grid } from "semantic-ui-react";
import { Route, Routes,Router } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
import LoginDetail from "../pages/LoginDetail";

import Pagmend from "./Pagmend";
import information from "../pages/information";


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
            <Route path="login" Component={LoginDetail}/>
            { <Route path="cart/pagmend" Component={Pagmend}/> }
            <Route path="infer" Component={information}/>
        
            
            </Routes>
           

          
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
