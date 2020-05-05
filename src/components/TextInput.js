import React from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';

import styleConstatns from '../style';

const S = StyleSheet.create({
  textInput: styleConstatns.textInput,
});

function TextInput({style, ...props}) {
  return <RNTextInput style={[S.textInput, style]} {...props} />;
}

export default TextInput;
