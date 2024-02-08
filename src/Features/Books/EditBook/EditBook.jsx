import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { updateBook } from "../BooksSlice"

function EditBook() {
  const location = useLocation()
  const [id, setId] = useState(location.state.id)
  const [title, setTitle] = useState(location.state.title)
  const [author, setAuthor] = useState(location.state.author)
  console.log(id, title, author);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit=(e)=>{
  e.preventDefault();
  dispatch(updateBook({id, title, author}))
navigate("/show-books", {replace: true})
  }
  return (
    <div>
    <div>EditBook</div>
    <form onSubmit={handleEdit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="text"
            defaultValue={title}
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
            defaultValue={author}
            name="author"
            placeholder="Enter Author's Name"
            required
            onChange={(e) => setAuthor(e.target.value)}
          >
          </input>
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
        <button style={{ backgroundColor:"green", color:"white", padding:"8px"}}>Update Book</button>
        </div>
      </form>
    </div>
  )
}

export default EditBook