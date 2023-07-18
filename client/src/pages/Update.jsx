import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = ({books}) => {

  // navigate back to home page
  const navigate = useNavigate();

  // locate book id
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  const currentbook = books[bookId-1] // want to prepopulate current book's info

  const [book, setBook] = useState({
    title: currentbook.title,
    desc: currentbook.desc,
    price: currentbook.price,
    cover: currentbook.cover,
  });
  // add the user inputs to the book hashmap
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // send data to backend server
  const handleClick = async (e) => {
    e.preventDefault(); // prevent refreshing the page
    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/"); //back to homepage
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Update A Book</h1>
      <input
        type="text"
        placeholder={"title"}
        value = {book.title}
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        value = {book.desc}
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        value = {book.price}
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        value = {book.cover}
        onChange={handleChange}
        name="cover"
      />
      <button className="formButton" onClick={handleClick}>
        Update
      </button>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Back to Home Page</Link>
    </div>
  );
};

export default Update;
