import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {Text} from '.';
import Spacer from './Spacer';

const S = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  container2: {flexDirection: 'row'},
});

function Todo({id, todo, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Spacer medium />
        <View style={S.container}>
          <View style={S.container2}>
            <Text>{todo.completed ? '✅' : '❎'}</Text>
            <Spacer medium />
            <Text>{todo.text}</Text>
            <Spacer medium />
          </View>
          <Text>{'➡️'}</Text>
        </View>
        <Spacer medium />
      </View>
    </TouchableOpacity>
  );
}

function mapStateToProps(state, ownProps) {
  const {id} = ownProps;
  const todo = state.todos.find((t) => t.id === id);
  return {todo};
}
export default connect(mapStateToProps)(Todo);
