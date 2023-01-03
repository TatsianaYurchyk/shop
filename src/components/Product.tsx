import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { products } from "../data/products";
import { IProduct } from "../models";
import ListGroup from 'react-bootstrap/ListGroup';

interface ProductProps {
  product: IProduct
}

export function Product(props: ProductProps) {

  return (
    <Card className="col-lg-3 col-md-4">
      <Card.Img height={"10%"} src={props.product.image} alt={props.product.title} title={props.product.title}/>
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>
          {props.product.description}
        </Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{props.product.price} $</ListGroup.Item>
          <ListGroup.Item>{props.product.category}</ListGroup.Item>
          <ListGroup.Item className="rating">{props.product.rating.rate}</ListGroup.Item>
        </ListGroup>
        <Button variant="primary">Add to cart</Button>
       
      </Card.Body>
    </Card>
  )

}