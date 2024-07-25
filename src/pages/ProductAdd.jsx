import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import {Button, FormField,Label} from "semantic-ui-react";
import MavvooTextInput from "../utilities/costomerFormControls/MavvooTextInput";




export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunludu"),
  });
  return (
    <div>
      
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit={(values)=>{
        console.log(values)
      }}>
        <Form className="ui form">
        <MavvooTextInput name="productName" placeholder="Ürün adı" />
        <MavvooTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
        <Button color='green' type='sumbit'>Ekle</Button>
    
        </Form>
      </Formik>
    </div>
  );
}
