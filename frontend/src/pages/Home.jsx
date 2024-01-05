// 1. Import axios
import axios from "axios";
//2. Import useEffect and useState
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  //3. Prepare Information State
  const [customer, setCustomer] = useState([]);
  const [customer_inputs, setCustomer_Inputs] = useState({
    customer_name: "",
    customer_email: "",
    customer_address: "",
  });

  //4. Use Effect
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/customer").then((res) => {
      setCustomer(res.data);
    });
  }, []);

  //5. Function to add customer
  const send = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/customer", {
        name: customer_inputs.customer_name,
        email: customer_inputs.customer_email,
        address: customer_inputs.customer_address,
      })
      .then((res) => {
        setCustomer_Inputs({
          ...customer_inputs,
          customer_name: "",
          customer_email: "",
          customer_address: "",
        });

        setCustomer(res.data);

        alert("Submitted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const View_Details = (id) => {
    navigate(`/update/${id}`);
  };

  const Delete_Record = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/customer/${id}`)
      .then((res) => {
        alert("Record has been deleted!");

        setCustomer(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //6. Forms / Design
  return (
    <div>
      <form action="" onSubmit={send}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          required
          value={customer_inputs.customer_name}
          onChange={(e) =>
            setCustomer_Inputs({
              ...customer_inputs,
              customer_name: e.target.value,
            })
          }
        />
        <br />
        <label htmlFor="">Email</label>
        <input
          type="email"
          required
          value={customer_inputs.customer_email}
          onChange={(e) =>
            setCustomer_Inputs({
              ...customer_inputs,
              customer_email: e.target.value,
            })
          }
        />
        <br />
        <label htmlFor="">Address</label>
        <input
          type="text"
          required
          value={customer_inputs.customer_address}
          onChange={(e) =>
            setCustomer_Inputs({
              ...customer_inputs,
              customer_address: e.target.value,
            })
          }
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <br />

      {customer.map((data) => {
        return (
          <>
            <div>
              <span>{data.name}</span>
              <br />
              <span>{data.email}</span>
              <br />
              <span>{data.address}</span>
              <br />
              <button onClick={() => View_Details(data.id)}>View</button>
              <button onClick={() => Delete_Record(data.id)}>Remove</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;
