import React from 'react';
import {connect} from 'react-redux';
import {FlatList, View} from 'react-native';
import {Screen, Button, Todo, Spacer, Text} from '../components';

function TodoListScreen({navigation, todoList}) {
  const renderItem = ({item: todo}) => (
    <Todo
      id={todo.id}
      onPress={() => {
        navigation.navigate('TodoDetailsScreen', {id: todo.id});
      }}
    />
  );
  const keyExtractor = (item) => item.id.toString();
  const handleAddTodoPress = () => {
    navigation.navigate('TodoCreateScreen');
  };
  const ListEmptyComponent = () => (
    <View>
      <Text>Nothing to do 😕</Text>
      <Spacer medium />
      <Text>Create one! 🤩</Text>
    </View>
  );

  return (
    <Screen noScroll>
      <Spacer large />
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={ListEmptyComponent}
      />
      <View>
        <Spacer medium />
        <Button title="Add Todo" onPress={handleAddTodoPress} />
        <Spacer medium />
      </View>
    </Screen>
  );
}

function mapStateToProps(state) {
  const {todos} = state;
  return {todoList: todos};
}

export default connect(mapStateToProps)(TodoListScreen);
