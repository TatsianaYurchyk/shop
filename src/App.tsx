import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { products } from './data/products';


function App() {
  return (
    <Container>
    <Header/>
    <Product product={products[0]}/>
    </Container>
  );
}

export default App;
