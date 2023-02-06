import {Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import BookList from "./pages/BookList";
import {NewBook} from "./pages/NewBook";
import {Book} from "./pages/Book";
import {BookLayout} from "./layouts/BookLayout";
function App() {

    return (
        <>
            <nav >
                <ul style={{
                    padding: "10px",
                    margin: 0,
                }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link replace to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/books">Book List</Link></li>
                    <li><Link to="/books/new">New Book</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/books" element={<BookLayout/>} >
                    <Route index element={<BookList/>} />
                    <Route  path=":id"  element={<Book/>} />
                    <Route path="new" element={<NewBook/>} />
                </Route>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </>
    );
}


export default App;
