import { createStore } from 'redux';

const initialState = {
  user: {
    id: null,
    name: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: {
          id: action.payload.id,
          name: action.payload.name,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        user: {
          id: null,
          name: null,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
