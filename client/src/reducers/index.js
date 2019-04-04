import actionTypes from '../actionTypes';

const { LOGIN, LOGOUT } = actionTypes;

const reducer = (state = { loggedIn: false, loading: true }, action) => {
  switch (action.type) {
    case LOGIN:
      return { 
        loggedIn: true, 
        loading: false, 
        username: action.username, 
        restaurantList: action.restaurantList
      };
    case LOGOUT:
      return { loggedIn: false, loading: false, username: null, restaurantList };
    default:
      return state;
  }
};

export default reducer;
