import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  // navigate back to home page
  const navigate = useNavigate();

  // add the user inputs to the book hashmap
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(book);

  // send data to backend server
  const handleClick = async (e) => {
    e.preventDefault(); // prevent refreshing the page
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/"); //back to homepage
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="book title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="description"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />
      <button className="formButton" onClick={handleClick}>
        Add
      </button>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Back to Home Page</Link>
    </div>
  );
};

export default Add;
