import React from "react";
import CartSummary from "./CartSummary";
import { Container, MenuMenu, MenuItem,  Menu } from "semantic-ui-react";
import { useSelector } from "react-redux";
import SignedOut from "./SignedOut";
import SıgnedIn from "./SıgnedIn";
import { useState } from "react";
import { useNavigate} from "react-router";
import { NavLink } from "react-router-dom";

export default function Navi() {
  
  const {cartItems}=useSelector(state=>state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const negative=useNavigate()

  function handleSignOut() {
    setIsAuthenticated(false)
    negative("/")
    

  }

    function handleSignIn() {
      setIsAuthenticated(true)
  }
debugger
  return (
    
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem as={NavLink} to="/" name="Ana Sayfa" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            {/* <CartSummary/> */}
            {cartItems.length>0&&<CartSummary />}
            {isAuthenticated?  <SıgnedIn signOut={handleSignOut} bisey="1"/>
            :<SignedOut signIn={handleSignIn} />}
           
          
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}
