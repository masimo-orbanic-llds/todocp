import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppInfoScreen from '../screens/AppInfoScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';
import TodoListScreen from '../screens/TodoListScreen';
import TodoCreateScreen from '../screens/TodoCreateScreen';

import {Button} from '../components';
import styleConstants from '../style';

const Stack = createStackNavigator();

function Router() {
  const headerRight = (navigation) => {
    return (
      <Button
        title="info"
        transparent
        onPress={() => {
          navigation.navigate('AppInfoScreen');
        }}
      />
    );
  };
  const headerStyle = {
    backgroundColor: styleConstants.header.backgroundColor,
  };
  const headerTintColor = styleConstants.header.text.color;
  const headerTitleStyle = {fontWeight: styleConstants.header.text.fontWeight};

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TodoListScreen"
          component={TodoListScreen}
          options={({navigation}) => ({
            title: 'My TO DO List',
            headerRight: () => headerRight(navigation),
            headerStyle,
            headerTintColor,
            headerTitleStyle,
          })}
        />
        <Stack.Screen
          name="TodoDetailsScreen"
          component={TodoDetailsScreen}
          options={({navigation}) => ({
            title: '',
            headerRight: () => headerRight(navigation),
            headerStyle,
            headerTintColor,
            headerTitleStyle,
          })}
        />
        <Stack.Screen
          name="TodoCreateScreen"
          component={TodoCreateScreen}
          options={{
            title: 'Add To Do',
            headerStyle,
            headerTintColor,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="AppInfoScreen"
          component={AppInfoScreen}
          options={{
            title: 'App Info',
            headerStyle,
            headerTintColor,
            headerTitleStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
