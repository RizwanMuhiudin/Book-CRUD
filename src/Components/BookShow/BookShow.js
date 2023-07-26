import { useState } from "react";
import BookEdit from "../BookEdit/BookEdit";
import useBookContext from "../../Custom Hooks/Use-Book-Context";

function BookShow({ book }) {

    const [showBookEdit, setShowBookEdit] = useState(false);
    const { deleteBookByID } = useBookContext();


    const handleDeleteClick = () => {
        deleteBookByID(book.id);
    };

    const handleEditClick = () => {
        setShowBookEdit(!showBookEdit);
    };

    const handleToggleSumbit = () => {
        setShowBookEdit(false);
    };

    let content = <h3>{book.input}</h3>;
    if (showBookEdit) {
        content = <BookEdit book={book} toggleSubmit={handleToggleSumbit} />;
    };

    return (
        <>
            <div className="book-show">
                <div>{content}</div>
                <div className="actions">
                    <button className="edit" onClick={handleEditClick}>Edit</button>
                    <button className="delete" onClick={handleDeleteClick}>Delete</button>
                </div>
            </div>
        </>
    );

}
export default BookShow;