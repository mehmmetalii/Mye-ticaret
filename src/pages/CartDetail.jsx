import React from "react";
import { useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownDivider,
  Label,
  Button,
  Icon,
  ButtonContent,
} from "semantic-ui-react";

export default function CartDetail() {
  const { cartItems } = useSelector((state) => state.cart);
  return cartItems.map((cartItem) => (
    <DropdownItem>
      {cartItem.product.productName}
      <Label>{cartItem.quantity}</Label>

      <Button animated="vertical">
        <ButtonContent hidden> Onayla</ButtonContent>
        <ButtonContent visible>
          <Icon name="shop" />
        </ButtonContent>
      </Button>
    </DropdownItem>
  ));
}
