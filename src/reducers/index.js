import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';

const rootReducer = combineReducers({
    books: BooksReducer
});
//We are essentially telling redux how to set-up state

export default rootReducer;
