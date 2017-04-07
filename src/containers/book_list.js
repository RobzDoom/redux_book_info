import React, { Component } from 'react';
import { connect } from 'react-redux' //This is the glue for React and Redux. 

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li className='list-group-item' key={book.title}>
                    {book.title}
                </li>
            )
        })
    }
    render(){
        return(
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //Whatever is returned here will show as props inside BookList
    return{
        books: state.books
    }
} //This is the glue for React and Redux

export default connect(mapStateToProps)(BookList) //Take a function and component and creates a container.