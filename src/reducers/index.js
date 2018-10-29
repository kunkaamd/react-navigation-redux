import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('Main');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('Login');
const initialNavState = RootNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}
/*
example:

***Component

<TouchableOpacity onPress={()=>{this.props.updateUser({'username':this.state.username})}}>
const mapDispatchToProps = dispatch => ({
    updateUser: (user) => dispatch({ type: 'update',user: user }),
});
const mapStateToProps = state => ({
    username: state.user.username,
});
export default connect(mapStateToProps,mapDispatchToProps)(Screen);

***Reducer

const initialState = {'username': 'hello'};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "update":
            return action.user;
        default:
            return state;
    }
};
export default userReducer;

*/
const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;