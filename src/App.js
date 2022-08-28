import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import ProductContainer from "./components/products/ProductContainer";
import Template from "./components/templates/Template";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Template>
                <Home />
              </Template>
            }
          />
          <Route
            path="/products"
            element={
              <Template>
                <ProductContainer />
              </Template>
            }
          />
          <Route
            path="/cart"
            element={
              <Template>
                <Cart />
              </Template>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
