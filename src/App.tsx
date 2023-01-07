import { Routes, Route} from "react-router-dom";
import { AdressPage } from "./pages/AdressPage";
import ProductPage from "./pages/ProductPage";

function App() {

  return (
    <Routes>
      <Route path='/home' element={<ProductPage/>}/>
      <Route path='/adresses' element={<AdressPage/>}/>
    </Routes>
    
  );
}

export default App;
