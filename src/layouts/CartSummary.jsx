import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DropdownMenu, DropdownItem, Dropdown, DropdownDivider } from "semantic-ui-react";

export default function CartSummary() {

  const {cartItems}=useSelector(state=>state.cart)

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <DropdownMenu>
          {
            cartItems.map((cartItem)=>(
              <DropdownItem>Acer Laptop</DropdownItem>
            ))
          }
          
          <DropdownDivider/>
          <DropdownItem as={NavLink} to="/cart">Sepete Git</DropdownItem>
  
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
