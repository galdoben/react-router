import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import DefaultLayout from "./layout/DefaultLayout";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {








  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/product" Component={ProductPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
