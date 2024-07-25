import React from "react";
import { FormField, Divider, Form, Button } from "semantic-ui-react";

export default function LoginDetail() {
  return (
    
    <Form>
      <FormField>
        <input type="text" placeholder="First name" />
        <Divider />

        <input type="text" placeholder="Last Name" />
        <Divider />

        <input type="text" placeholder="Username" />
        <Divider />

        <input type="password" placeholder="Password" />
      </FormField>
      
      <Button  >Kayıt Ol</Button>

    </Form>
  );
}
