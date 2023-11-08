import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import CreateCustomer from "./pages/CreateCustomer";
import UpdateCustomer from "./pages/UpdateCustomer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route path="/update-customer/:id" element={<UpdateCustomer />} />
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
