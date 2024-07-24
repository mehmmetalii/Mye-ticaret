import React, { useState,usEffect, useEffect } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Table,
} from "semantic-ui-react";

import ProductService from "../services/productService";

import { Link } from "react-router-dom";

export default function ProductList() {
  
  const [products, setProducts] = useState([]);


   useEffect(()=>{
     let productService=new ProductService()
    productService.getProducts().then(result=>{console.log(result);setProducts(result.data)})
    },[])

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Ürün Numarası</TableHeaderCell>
            <TableHeaderCell>Ürün Adı</TableHeaderCell>
            <TableHeaderCell>Kategori Numarası</TableHeaderCell>
            <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
            <TableHeaderCell>Ürün Stok</TableHeaderCell>
           {/* <TableHeaderCell>Sipariş Tarihi</TableHeaderCell> */}

          </TableRow>
        </TableHeader>

        <TableBody>
        
       {products.map((product)=>(
         <TableRow key={product.id}>
         <TableCell>{product.productId}</TableCell>
         <TableCell><Link to={`/products/${product.productName}`}>{product.productName}</Link></TableCell>
         <TableCell>{product.categoryId}</TableCell>
         <TableCell>{product.unitPrice}</TableCell>
         <TableCell>{product.unitInStock}</TableCell>
         {/* <TableCell>{product.orderDate}</TableCell> */}
       </TableRow>
       ))} 
        
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <MenuItem as="a" icon>
                  <Icon name="chevron left" />
                </MenuItem>
                <MenuItem as="a">1</MenuItem>
                <MenuItem as="a">2</MenuItem>
                <MenuItem as="a">3</MenuItem>
                <MenuItem as="a">4</MenuItem>
                <MenuItem as="a" icon>
                  <Icon name="chevron right" />
                </MenuItem>
              </Menu>
            </TableHeaderCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
