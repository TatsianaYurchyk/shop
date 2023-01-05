import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { products } from "../data/products";
import { IProduct } from "../models";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'
import { Container } from "react-bootstrap";


interface ProductProps {
  product: IProduct
}

export function Product(props: ProductProps) {

  const [details,setDetails]=useState(false)
  const [inCart,setInCart]=useState(false)
  const btnColour =details? "btn-info":"btn-warning"
  const titleStyle=details? "":"text-truncate"// ...
  const btnCart=inCart? "btn-light":"btn-dark"
  const btnClass=['mb-2',btnColour]
  

  return (
  //  <Container>
    <Card className="col-lg-3 col-md-6 gy-3 ">
      <div className="text-center">
      <Card.Img style={{height: '140px', width:'auto'}} className="mt-2" src={props.product.image} alt={props.product.title} title={props.product.title}/>
      <Card.Body >
        
        <Card.Title className={titleStyle} title={props.product.title}>{props.product.title}</Card.Title>
        <Button className={btnColour} onClick={()=>setDetails(prev=> !prev)}>{details? 'Hide deatils':"Show details"}</Button>
        {/* <Button className={btnClass.join(' ')} onClick={()=>setDetails(prev=> !prev)}>{details? 'Hide deatils':"Show details"}</Button> */}
        
        
        {details && < Card.Text>
          {props.product.description}
        </Card.Text>}

        <ListGroup className="list-group-flush ">
          <ListGroup.Item>{props.product.price} $</ListGroup.Item>
          <ListGroup.Item>{props.product.category}</ListGroup.Item>
          <ListGroup.Item className="rating">{props.product.rating.rate}</ListGroup.Item>
        </ListGroup>
        <Button className={btnCart} onClick={()=>setInCart(prev=>!prev)}>{inCart? 'In cart': "Add to cart"}</Button>
        
    
      
       
      </Card.Body>
      </div>
    </Card>
    // </Container>
  )

}