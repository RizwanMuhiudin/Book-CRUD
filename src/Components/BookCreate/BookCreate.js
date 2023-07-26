import { useContext, useState } from "react";
import BooksContext from "../../Context/Books";

function BookCreate() {

    const [input, setInput] = useState("");
    const { createBook } = useContext(BooksContext);

    const handleSubmitForm = (event) => {
        event.preventDefault();
        setInput("");
        if (input !== "") {
            createBook(input);
        };
    };

    const HandleOnChange = (event) => {
        setInput(event.target.value);
    };
    return (

        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmitForm}>
                <label>Add Title</label>
                <input className="input" value={input} onChange={HandleOnChange} />
                <button className="button">Create</button>
            </form>
        </div>

    );
}
export default BookCreate;