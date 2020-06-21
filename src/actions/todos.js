import API from 'goals-todos-api';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export function handleDeleteTodo(todo) {
  //returning a function to handle the API Call
  return (dispatch) => {
    dispatch(removeTodo(todo.id));
    //Deleting the item from the data base API optimistically
    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo));
      alert('An error ocurred, try again');
    });
  };
}

export function handleAddTodo(name, callback) {
  return (dispatch) => {
    //Saving the data in the "database". Redux fetch the data from the database and load
    // that data into the Redux.store. Then, as the user interact with the app we simultaneously
    // update the Redux-store and persist the changes in the database.
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo));
        callback();
      })
      .catch(() => alert('There was an error, try again'));
  };
}

export function handleToggle(id) {
  return (dispatch) => {
    dispatch(toggleTodo(id));
    //Toggling the item from the data base API optimistically
    return API.saveTodoToggle(id).catch(() => {
      dispatch(toggleTodo(id));
      alert('An error ocurred, try again');
    });
  };
}
