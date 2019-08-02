import React from 'react'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import appReducer from './reducers';
import SelectWorkoutScreen from './screens/select-workout';

const MainNavigator = createStackNavigator({
  SelectWorkout: SelectWorkoutScreen,
}, {
  headerMode: 'none'
});

const Navigation = createAppContainer(MainNavigator);

const Store = createStore(appReducer, applyMiddleware(thunkMiddleware));

const App = () => {
  return <Provider store={Store}>
    <Navigation />
  </Provider>;
}

// const unsubscribe = Store.subscribe(() => console.log(Store.getState()))

export default App;
