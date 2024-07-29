import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { MenuItem,Image,Dropdown,DropdownMenu,DropdownItem } from 'semantic-ui-react'


export default function SıgnedIn({signOut}) {

  
  return (
    <div>
      <MenuItem>

        <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/174965874?v=4" />
        <Dropdown pointing="top left" text='Mehmet'>
            <DropdownMenu>
                <DropdownItem as={NavLink} to="product/add" text="Ürün Ekle" icon="info"/>
                <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
            </DropdownMenu>


        </Dropdown>
        </MenuItem>

    </div>
  )
}
