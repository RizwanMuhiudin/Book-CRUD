import { useContext } from "react";
import BooksContext from "../Context/Books";


const useBookContext = () => {
    return useContext(BooksContext);
};

export default useBookContext;