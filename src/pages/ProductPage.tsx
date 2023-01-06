import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from '../components/Header';
import { Product } from '../components/Product';
import { products } from '../data/products';
import { Row} from 'react-bootstrap';
import { useProduct } from '../hooks/fetchProduct';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { useState } from 'react';
import { IProduct } from '../models';
import { Button } from 'react-bootstrap';

function ProductPage() {

const {loading,products,error,addProduct}=useProduct()
const [modal,setModal]=useState(false)

const createHandler =(product:IProduct)=>{
  setModal(false)
  addProduct(product)
}



  return (
    <Container>
    <Header/>
    {loading && <p className='text-center'>Loading...</p>}
    {error && <p className='text-center text-danger'>{error}</p>}
    <Row className='gx-3 m-0'>
    {products.map(product=><Product product={product} key={product.id}/>)}
    </Row>
    {modal && <Modal title="Product add" onClose={()=>setModal(false)}>
      <CreateProduct onCreate={createHandler} />
    </Modal>}
    <Button variant="primary" className='btnAdd rounded-circle' onClick={()=>setModal(true)}>+</Button>
    </Container>
  );
}

export default ProductPage;
