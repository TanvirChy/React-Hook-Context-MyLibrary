import React ,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () =>{
    const {books} = useContext(BookContext);
    return(
        <div className='navbar'>
            <h1>Tanvirs Reading List</h1>
            <p>Current I have {books.length} books</p>

        </div>
    );
}

export default Navbar;