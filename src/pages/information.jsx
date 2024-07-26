import React from 'react'
import { FormField, Divider, Form, Button } from "semantic-ui-react";

export default function information() {
  return (
<Form>
      <FormField>
        <label>Kullanıcı Adı:Mehmet</label>
        <Divider />

       <label>Şifre:12345</label>
        <Divider />

        <label>Telefon:05555555555</label>
        <Divider />

        <label>E-mail:mavvo@gmail.com</label>
        <Divider />

        <label>Adres:Ankara/Ostim</label>
        <Divider />

       
      </FormField>
      </Form>
  )
}
