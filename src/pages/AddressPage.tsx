import React from "react";
import { Header } from "../components/Header";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Col,Row } from "react-bootstrap";

export function AddressPage (){

    const shops = [
        {id:1, title: "Wild Hall", city: "NY", address:" Picasso Av. 34", time: "10-22"},
        {id:2, title: "Lake Hall", city: "NY", address:" Delaro Str. 11", time: "10-22"},
        {id:3, title: "Jerome Mall", city: "LA", address:" Pinehall Av. 1A", time: "10-22"},
        {id:4, title: "Adeline Hall", city: "LA", address:" Sevenmood Str. 45", time: "10-22"},
    ]

    return (
        <Container>
        <Header/>
        <Row md={2} xs={1} lg={4} className="g-3 text-center">
        {shops.map(shop=>(
          <Col>
            <Card  key={shop.id} >
            <Card.Body>
              <Card.Title>{shop.title}</Card.Title>
              
              <Card.Text>
               {shop.city} <br/>
               {shop.address} <br/>
               {shop.time} <br/>
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Col>
        ))}
        </Row>
       
    </Container>
    )
    

}