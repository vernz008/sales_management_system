import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [category_inputs, setCategoryInputs] = useState({
    name: "",
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/category`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const send = (e) => {
    e.preventDefault();

    axios
      .post(`http://127.0.0.1:8000/api/category`, {
        name: category_inputs.name,
      })
      .then((res) => {
        setCategoryInputs({ ...category_inputs, name: "" });
        alert("Successfully added");

        axios
          .get(`http://127.0.0.1:8000/api/category`)
          .then((res) => {
            setCategories(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  const View_Details = (id) => {
    navigate(`/update-category/${id}`);
  };

  const Delete_Category = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/category/${id}`)
      .then((res) => {
        alert("Successfully deleted");
        setCategories(res.data);
        navigate(`/category`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Category</h2>
      <form action="" onSubmit={send}>
        <label htmlFor="">Category</label>
        <input
          type="text"
          required
          value={category_inputs.name}
          onChange={(e) =>
            setCategoryInputs({ ...category_inputs, name: e.target.value })
          }
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <br />

      {categories.map((data) => {
        return (
          <>
            <div>
              <span>{data.id}</span> | <span>{data.name}</span> |{" "}
              <button onClick={() => View_Details(data.id)}>View</button> |{" "}
              <button onClick={() => Delete_Category(data.id)}>Remove</button>
            </div>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default Category;
