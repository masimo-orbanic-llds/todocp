import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {connect} from 'react-redux';

import {Screen, Text, Button, TextInput, Spacer} from '../components';
import {addTodo} from '../redux/actions';

const S = StyleSheet.create({});

function TodoDetailsScreen({navigation, dispatch}) {
  const [text, setText] = useState('');
  const onChangeText = (newText) => setText(newText);
  const handleAddPress = () => {
    const id = new Date().getTime();
    dispatch(addTodo(text, id));
    Alert.alert(
      '',
      'Your todo is added!',
      [
        {text: 'Add another', onPress: () => setText('')},
        {
          text: 'Go back',
          onPress: () => {
            navigation.goBack();
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <Screen>
      <Spacer medium />
      <Text>Name your To Do</Text>
      <Spacer medium />
      <TextInput onChangeText={onChangeText} value={text} />
      <Spacer medium />
      <Button title="ADD 🎊" onPress={handleAddPress} />
    </Screen>
  );
}

export default connect(() => ({}))(TodoDetailsScreen);
