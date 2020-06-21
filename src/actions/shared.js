import API from 'goals-todos-api';
export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    // Using Promise.all because we are using to asynchronous requests
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      dispatch(receiveData(todos, goals));
    });
  };
}
