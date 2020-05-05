import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import todoApp from './reducers';
import {ASYNC_STORAGE_KEY} from '../constants';

const storeData = async (state) => {
  try {
    await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // saving error
  }
};

function persistState({getState}) {
  return (next) => async (action) => {
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);
    await storeData(getState());
    return returnValue;
  };
}

const store = (initialState) =>
  createStore(todoApp, initialState, applyMiddleware(persistState));
export default store;
