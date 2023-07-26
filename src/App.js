import { useEffect } from "react";
import BookCreate from "./Components/BookCreate/BookCreate";
import BookList from "./Components/BookList/BookList";
import useBookContext from "./Custom Hooks/Use-Book-Context";
// import Test from "./Test";


function App() {

    const { fetchBooks } = useBookContext();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    // fetchBooks(); Don't Do This  
    return (
        <>
            <div className="app">
                <h1>Reading List</h1>
                <BookCreate />
                <BookList />

            </div>
        </>
    );
};
export default App;