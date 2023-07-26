
import BookShow from '../BookShow/BookShow';
import useBookContext from '../../Custom Hooks/Use-Book-Context';


function BookList() {
    const { books } = useBookContext();
    const renderedBooks = books.map((book) => {
        return <BookShow book={book} key={book.id} />
    });
    return (
        <>
            <div className="Book-list">
                {renderedBooks}
            </div>
        </>
    );
};
export default BookList;