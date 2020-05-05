import React, {useState, useEffect} from 'react';
import {StatusBar, ActivityIndicator, View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import codePush from 'react-native-code-push';

import storeCreator from './redux/store';
import Router from './router';
import {ASYNC_STORAGE_KEY} from './constants';

const S = StyleSheet.create({
  loading: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return {};
  }
};

const App = () => {
  const [initialState, setInitialState] = useState(false);

  useEffect(() => {
    async function getInitialStorage() {
      try {
        const data = await getData(ASYNC_STORAGE_KEY);
        setInitialState(JSON.parse(data));
      } catch (e) {
        setInitialState({});
      }
    }
    getInitialStorage();
  }, []);

  if (!initialState) {
    return (
      <View style={S.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const store = storeCreator(initialState);
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Router />
    </Provider>
  );
};

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

export default codePush(codePushOptions)(App);
