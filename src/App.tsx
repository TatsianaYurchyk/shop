import { Routes, Route} from "react-router-dom";
import { AddressPage } from "./pages/AddressPage";
import ProductPage from "./pages/ProductPage";

import { Container } from "react-bootstrap";

function App() {

  return (
    <Container className="mb-4">
    <Routes>
      <Route path='/' element={<ProductPage/>}/>
      <Route path='/shop' element={<ProductPage/>}/>
      <Route path='/addresses' element={<AddressPage/>}/>
      
    </Routes>
    </Container>
  );
}

export default App;
