import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { products } from './data/products';
import { Row} from 'react-bootstrap';
import { useProduct } from './hooks/fetchProduct';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';

function App() {

const {loading,products,error}=useProduct()
  return (
    <Container>
    <Header/>
    {loading && <p className='text-center'>Loading...</p>}
    {error && <p className='text-center text-danger'>{error}</p>}
    <Row className='gx-3'>
    {products.map(product=><Product product={product} key={product.id}/>)}
    </Row>
    <Modal >
      <CreateProduct title='Product add' />
    </Modal>
    </Container>
  );
}

export default App;
