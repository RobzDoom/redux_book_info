import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title}
                onClick = {()=> this.props.selectBook(book)}
                className='list-group-item'>
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

//Anything returned here, will be returned as props on the BookList Container. 
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed to all of ouor reducers.
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Promote BookList from a component to a container. - it needs to know 
// About this new Dispatch method, selectBook. Make it availble  as prop. 

export default connect(mapStateToProps, mapDispatchToProps)(BookList) //Take a function and component and creates a container.

//Which compoent do we want to turn into a container?
//The most parent component that cares about a particular piece of state to be a container
//Containers are the ones that have a direct connection to redux. 