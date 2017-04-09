export function selectBook(book){
   //selectBook is an action creator it needs to return an action,
   // an object with a type of property. 
   // actions usually have 2 values: a type and a payload.
   return {
        type: 'BOOK_SELECTED',
        payload: book
   }
}

export default selectBook;