import axios from "axios";
import { createContext, useCallback, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {

    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const fetchResponse = await axios.get('http://localhost:3001/books');
        setBooks(fetchResponse.data);
    }, []);

    const createBook = async (input) => {
        const createResponse = await axios.post('http://localhost:3001/books', {
            input,
        });
        const updateBooks = [
            ...books, createResponse.data
            // {
            //     id: Math.round(Math.random() * 9999),
            //     input,
            // }
        ];
        setBooks(updateBooks);
    };

    const deleteBookByID = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updateBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updateBooks);
    };

    const editBookById = async (id, takeEditInput) => {
        const editResponse = await axios.put(`http://localhost:3001/books/${id}`, {
            input: takeEditInput,
        });
        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...editResponse.data }
            };
            return book;
        });
        setBooks(updateBooks);
    };

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        deleteBookByID,
        editBookById
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
};

export { Provider };
export default BooksContext;