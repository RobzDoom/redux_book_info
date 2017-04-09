//State argument is not application state
//this reducer is responsible for at the time. 

export default function (state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload
    }
    return state;
}

//all reducer get two arguments. State and action
//reducers are only called when an action is called.