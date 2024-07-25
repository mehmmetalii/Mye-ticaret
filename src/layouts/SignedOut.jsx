import React  from 'react'
import { Button, MenuItem } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

export default function SignedOut({signIn}) {
  return (
    <div>
      <MenuItem>
      <Button onClick={signIn} primary >Giriş Yap</Button>
      <Button as={NavLink} to="/login"  secondary >Kayıt Ol</Button>
   
   
      </MenuItem>
    </div>
  )
}
