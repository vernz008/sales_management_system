import React, { useState } from "react";
import axios from "axios";

const CreateCustomer = () => {
  const [input_data, setInput_Data] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/customer", {
        name: input_data.name,
        email: input_data.email,
        address: input_data.address,
      })
      .then((res) => {
        alert("submitted successfully");
        setInput_Data({ ...input_data, name: "", email: "", address: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <a href="/home">Home Page</a>
      <br />
      <a href="/customer">Customer List</a>
      <form action="" onSubmit={handleInputChange}>
        <div>
          <label htmlFor="">Name</label>
          <input
            required
            value={input_data.name}
            onChange={(e) =>
              setInput_Data({ ...input_data, name: e.target.value })
            }
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            value={input_data.email}
            required
            onChange={(e) =>
              setInput_Data({ ...input_data, email: e.target.value })
            }
            type="email"
          />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <input
            value={input_data.address}
            required
            onChange={(e) =>
              setInput_Data({ ...input_data, address: e.target.value })
            }
            type="text"
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCustomer;

/*
Tulog ka na ata hahahaha

oks na 

gusto mo ung crud niyan??

kasama ung delete at ung update??

cge kumpletuhin mo n

gagii hahaha akala ko nakikinig ka hahahah

*/
