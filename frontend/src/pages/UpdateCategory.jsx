import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCategory = () => {
  const params = useParams();
  const id = params.cat_id;

  const navigate = useNavigate();

  const [categories, setCategory] = useState([]);
  const [category_name, setCategoryName] = useState("");

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/category/${id}`).then((res) => {
      setCategory(res.data);
      setCategoryName(res.data.name);
    });
  }, []);

  const send = (e) => {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:8000/api/category/${id}`, {
        name: category_name,
      })
      .then((res) => {
        alert("Updated Successfully");

        setCategory(res.data);
        setCategoryName(res.data.name);

        navigate("/category/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h2>Update Category</h2>
      <div>
        <form action="" onSubmit={send}>
          <label htmlFor="">Category</label>
          <input
            type="text"
            required
            value={category_name}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default UpdateCategory;
