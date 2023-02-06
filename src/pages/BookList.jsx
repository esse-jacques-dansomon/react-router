import {useOutletContext} from "react-router-dom";

export const BookList = () => {
    const obj = useOutletContext();
    return (
        <>
            < img src="https://placekitten.com/200/300" alt="Kitten" />
            <h4>Book List</h4>
            {obj.hello}
        </>
    );
}

export default BookList;