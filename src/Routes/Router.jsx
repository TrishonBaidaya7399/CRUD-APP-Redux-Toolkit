import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Navbar from "../Component/Shared/Navbar";
import ViewBooks from "../Features/Books/ViewBooks/ViewBooks";
import AddBook from "../Features/Books/AddBook/AddBook";
import Footer from "../Component/Shared/Footer";

const Router = () => {
    return (
       <BrowserRouter>
       <Navbar/>
       <main>
       <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/show-books" element={<ViewBooks/>}>Show Books</Route>
        <Route path="/add-book" element={<AddBook/>}>Add Book</Route>
        <Route path="*" element={<ErrorPage/>}>Error Page</Route>
       </Routes>
       </main>
       <Footer/>
       </BrowserRouter>
    );
};

export default Router;