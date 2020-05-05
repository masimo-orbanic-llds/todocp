import {combineReducers} from 'redux';
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actions';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    case REMOVE_TODO:
      const index = state.findIndex((todo) => todo.id === action.id);
      if (index === -1) {
        return state;
      }
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
});

export default todoApp;
