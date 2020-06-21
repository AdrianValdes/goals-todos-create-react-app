import { ADD_GOAL } from '../actions/goals';
import { ADD_TODO } from '../actions/todos';
// Using Redux Middleware with the Currying technique
function checker(store) {
  return function (next) {
    return function (action) {
      //here comes the Middleware code
      if (
        action.type === ADD_TODO &&
        action.todo.name.toLowerCase().indexOf('bitcoin') !== -1
      ) {
        return alert('Nop, it is a bad idea!');
      }
      if (
        action.type === ADD_GOAL &&
        action.goal.name.toLowerCase().indexOf('bitcoin') !== -1
      ) {
        return alert('Nop, it is a bad idea!');
      }
      return next(action);
    };
  };
}
export default checker;
