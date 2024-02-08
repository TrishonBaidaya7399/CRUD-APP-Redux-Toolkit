import { createSlice } from "@reduxjs/toolkit";

const initialBooks ={
    books:[
        {id: 1, title: "Love Bangladesh", author: 'xyz'},
        {id: 2, title: "Love India", author: 'xyz'},
        {id: 3, title: "Hate Pakistan", author: 'xyz'},
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
    }
}
})

export const {showBooks, addBook, deleteBook} = BookSlice.actions;
export default BookSlice.reducer;