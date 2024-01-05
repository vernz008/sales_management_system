import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import CreateCustomer from "./pages/CreateCustomer";
import UpdateCustomer from "./pages/UpdateCustomer";
import UpdateHome from "./pages/UpdateHome";
import Category from "./pages/Category";
import UpdateCategory from "./pages/UpdateCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:customer_id" element={<UpdateHome />} />

        <Route path="/customer" element={<Customer />} />
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route path="/update-customer/:id" element={<UpdateCustomer />} />

        <Route path="/category" element={<Category />} />
        <Route path="/update-category/:cat_id" element={<UpdateCategory />} />
      </Routes>
    </>
  );
}

export default App;

/*

dito nmn gagawa ako folder ng pages
para maging maayos ung ating routing sa 
tamang pages at components.


gets mo??
oiii

ahahaha
 

sige tuloy
ano gagawa ako ng page na para sa data mo
w8

sasalpak natin dito ung customer

*/
