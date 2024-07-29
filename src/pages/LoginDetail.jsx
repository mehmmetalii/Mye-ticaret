import React from "react";
import { FormField, Divider, Form, Button } from "semantic-ui-react";

export default function LoginDetail() {
  return (
    
    <Form>
      <FormField>
        <input type="text" placeholder="Ad" />
        <Divider />

        <input type="text" placeholder="Soyad" />
        <Divider />

        <input type="text" placeholder="Kullanıcı Adı" />
        <Divider />

        <input type="password" placeholder="Şifre" />
      </FormField>
      
      <Button  >Kayıt Ol</Button>

    </Form>
  );
}
