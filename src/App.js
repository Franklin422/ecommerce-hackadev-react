import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProductContainer from "./components/products/ProductContainer";
import Template from "./components/templates/Template";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
