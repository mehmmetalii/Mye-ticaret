import React from "react";
import CartSummary from "./CartSummary";
import { Container, MenuMenu, MenuItem, Button, Menu } from "semantic-ui-react";

import SignedOut from "./SignedOut";
import SıgnedIn from "./SıgnedIn";
import { useState } from "react";
import { useNavigate} from "react-router";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const negative=useNavigate()

  function handleSignOut() {
    setIsAuthenticated(false)
    negative("/")
    

  }

    function handleSignIn() {
      setIsAuthenticated(true)
  }

  return (
    
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            <CartSummary />
            {isAuthenticated?  <SıgnedIn signOut={handleSignOut} bisey="1"/>
            :<SignedOut signIn={handleSignIn} />}
           
          
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}
