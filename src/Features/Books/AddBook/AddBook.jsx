import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../BooksSlice";
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from "uuid"

function AddBook() {
  const [ title, setTitle ] = useState("");
  const [ author, setAuthor ] = useState("");
const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(title, author);
    const bookData = {id: uuidv4(), title, author}
    console.log(bookData);
    dispatch(addBook(bookData))
    navigate("/show-books", {replace:true})
  }

  return (
    <div style={{marginInline:"auto"}}>
      <div style={{display:"flex", justifyContent:"center", padding:"10px", fontSize:"24px"}}>Add Book</div>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="text"
            value={title}
            name="title"
            placeholder="Enter Book Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          >
          </input>
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            type="author"
            value={author}
            name="author"
            placeholder="Enter Author's Name"
            required
            onChange={(e) => setAuthor(e.target.value)}
          >
          </input>
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
        <button style={{ backgroundColor:"green", color:"white", padding:"8px"}}>Add Book</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
