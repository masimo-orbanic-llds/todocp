import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {Spacer, Screen, Text, Button} from '../components';
import {toggleTodo, removeTodo} from '../redux/actions';

const S = StyleSheet.create({
  container: {flex: 1},
});

function TodoDetailsScreen({todo, dispatch, navigation, ...otherProps}) {
  const handleToggleTodoPress = () => {
    dispatch(toggleTodo(todo.id));
  };
  const handleRemoveTodoPress = () => {
    dispatch(removeTodo(todo.id));
    navigation.goBack();
  };
  return (
    <Screen>
      <Spacer medium />
      <View style={S.container}>
        <Spacer large />
        <Text small>Name</Text>
        <Spacer small />
        <Text>{todo.text}</Text>
        <Spacer large />
        <Text small>Completed</Text>
        <Spacer small />
        <Text>{todo.completed ? 'Completed ✅' : 'NOT completed ❎'}</Text>
      </View>
      <Spacer medium />
      <Button title={'remove'} onPress={handleRemoveTodoPress} />
      <Spacer medium />
      <Button
        title={
          todo.completed ? 'Mark as not completed ❎' : 'Mark as complete ✅'
        }
        onPress={handleToggleTodoPress}
      />
      <Spacer medium />
    </Screen>
  );
}

function mapStateToProps(state, ownProps) {
  const {id} = ownProps.route.params;
  const todo = state.todos.find((t) => t.id === id) || {};
  return {todo};
}
export default connect(mapStateToProps)(TodoDetailsScreen);
