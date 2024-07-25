import React from "react";
import { NavLink } from "react-router-dom";
import { MenuItem, Menu } from "semantic-ui-react";

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <MenuItem as={NavLink} to="/" name="Ana Sayfa" />
        <MenuItem  name="Masage" />
        <MenuItem name="friends" />
      </Menu>
    </div>
  );
}
