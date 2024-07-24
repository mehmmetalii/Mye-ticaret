import { useEffect,useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    Button,
    Card,
    Image,
    Icon
  } from 'semantic-ui-react'
  import ProductService from '../services/productService'

export default function ProductDetail() {
   let {name}= useParams();
   const [product, setProduct] = useState({});
   useEffect(()=>{
    let productService = new ProductService()
   productService.getProductName(name).then(result=>{console.log(result);setProduct(result.data)})
   },[])

  return (
    <div>
        
        <Card fluid>
      <CardContent>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <CardHeader>{product.productName}</CardHeader>
        <CardMeta>{product.categoryId}</CardMeta>
        <CardDescription>
          Steve wants to add you to the group <strong>best friends</strong>
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
