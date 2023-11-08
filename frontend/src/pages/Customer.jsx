import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/customer")
      .then((res) => {
        console.log(res);
        setCustomer(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const UpdateCustomer = (id) => {
    console.log(id);
    navigate(`/update-customer/${id}`);
  };

  const DeleteCustomer = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/customer/${id}`)
      .then((res) => {
        alert("Customer deleted");
        setCustomer(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <a href="/create-customer">Add Customer</a>
      {customer.map((data) => {
        return (
          <div>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.address}</p>

            <button onClick={() => DeleteCustomer(data.id)}>Delete</button>
            <button onClick={() => UpdateCustomer(data.id)}>Update</button>
          </div>
        );
      })}
    </div>
  );
};

export default Customer;

/*
Yan hahaha
sa get yan

gusto mo ung create??
eto panoorin mo
*/
