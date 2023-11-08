import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateCustomer = () => {
  const [customer_data, setCustomer_Data] = useState([]);
  const [update_data, setUpdate_Data] = useState({
    name: "",
    email: "",
    address: "",
  });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/customer/${id}`)
      .then((res) => {
        setCustomer_Data(res.data);
        setUpdate_Data({
          ...update_data,
          name: res.data.name,
          email: res.data.email,
          address: res.data.address,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const update_customer = (e) => {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:8000/api/customer/${id}`, {
        name: update_data.name,
        email: update_data.email,
        address: update_data.address,
      })
      .then((res) => {
        alert("Customer updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <a href="/customer">Customer List</a>
      <form action="" onSubmit={update_customer}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={update_data.name}
            onChange={(e) => {
              setUpdate_Data({ ...update_data, name: e.target.value });
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={update_data.email}
            onChange={(e) => {
              setUpdate_Data({ ...update_data, email: e.target.value });
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <input
            type="text"
            value={update_data.address}
            onChange={(e) => {
              setUpdate_Data({ ...update_data, address: e.target.value });
            }}
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCustomer;
