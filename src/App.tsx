import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { products } from './data/products';
import { Row,Col } from 'react-bootstrap';
import axios, { AxiosError } from 'axios';
import { IProduct } from './models';
import { useState } from 'react';


function App() {
  const[products,setProducts]=useState<IProduct[]>([])
  const [loading,setLoading]= useState(false)
  const [error,setError]= useState('')

async function fetchProducts() {
  try {
  setError("")
  setLoading(true)
  const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?')
  setProducts(response.data)
  setLoading(false)
  } catch (e:unknown) {
    const error = e as AxiosError
    setLoading(false)
    setError(error.message)
  }


  

}

useEffect(()=>{
 fetchProducts()
},[])

  return (
    <Container>
    <Header/>
    {loading && <p className='text-center'>Loading...</p>}
    {error && <p className='text-center text-danger'>{error}</p>}
    <Row className='gx-3'>
    {products.map(product=><Product product={product} key={product.id}/>)}
    </Row>
    </Container>
  );
}

export default App;
