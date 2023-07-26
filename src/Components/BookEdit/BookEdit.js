import { useState } from "react";
import useBookContext from "../../Custom Hooks/Use-Book-Context";

function BookEdit({ book, toggleSubmit }) {

    const [takeEditInput, setTakeEditInput] = useState(book.input);
    const { editBookById } = useBookContext();

    const handleSubmitForm = (event) => {
        event.preventDefault();
        // onEditBook(book.id, takeEditInput);
        toggleSubmit();
        editBookById(book.id, takeEditInput);
    };

    const handleOnChange = (event) => {
        setTakeEditInput(event.target.value);
    };

    return (

        <div>
            <form className="book-edit" onSubmit={handleSubmitForm} >
                <label>Title</label>
                <input className="input" value={takeEditInput} onChange={handleOnChange} />
                <button className="button is-primary">Save</button>
            </form>
        </div>

    );
};
export default BookEdit;