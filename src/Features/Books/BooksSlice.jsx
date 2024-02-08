import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid"

const initialBooks ={
    books:[
        {id: uuidv4(), title: "Love Bangladesh", author: 'xyz'},
        {id: uuidv4(), title: "Love India", author: 'xyz'},
        {id: uuidv4(), title: "Hate Pakistan", author: 'xyz'},
    ]
}

export const BookSlice = createSlice({
name: "books",
initialState: initialBooks,
reducers:{
    showBooks:(state)=>state,
    addBook:(state, action)=>{
        state.books.push(action.payload)
    },
    deleteBook:(state, action)=>{
        const id = action.payload;
        state.books = state.books.filter(book=> book.id !== id)
    },
    updateBook:(state, action)=>{
        const {id, title, author} = action.payload;
        const isBookExists = state.books.filter(book=> book.id === id)
        if(isBookExists){
            isBookExists.title = title
            isBookExists.author = author
        }
    }
}
})

export const {showBooks, addBook, deleteBook, updateBook} = BookSlice.actions;
export default BookSlice.reducer;