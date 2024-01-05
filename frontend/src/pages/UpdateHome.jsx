import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateHome = () => {
  const params = useParams();
  const id = params.customer_id;
  const navigate = useNavigate();

  const [customer, setCustomer] = useState([]);
  const [customer_inputs, setCustomerInputs] = useState({
    customer_name: "",
    customer_email: "",
    customer_address: "",
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/customer/${id}`).then((res) => {
      setCustomerInputs({
        ...customer_inputs,
        customer_name: res.data.name,
        customer_email: res.data.email,
        customer_address: res.data.address,
      });
    });
  }, []);

  const send = (e) => {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:8000/api/customer/${id}`, {
        name: customer_inputs.customer_name,
        email: customer_inputs.customer_email,
        address: customer_inputs.customer_address,
      })
      .then((res) => {
        setCustomer(res.data);
        alert("Customer updated successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={send}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          value={customer_inputs.customer_name}
          onChange={(e) => {
            setCustomerInputs({
              ...customer_inputs,
              customer_name: e.target.value,
            });
          }}
        />
        <br />
        <label htmlFor="">Email:</label>
        <input
          type="text"
          value={customer_inputs.customer_email}
          onChange={(e) => {
            setCustomerInputs({
              ...customer_inputs,
              customer_email: e.target.value,
            });
          }}
        />
        <br />
        <label htmlFor="">Address:</label>
        <input
          type="text"
          value={customer_inputs.customer_address}
          onChange={(e) => {
            setCustomerInputs({
              ...customer_inputs,
              customer_address: e.target.value,
            });
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateHome;
