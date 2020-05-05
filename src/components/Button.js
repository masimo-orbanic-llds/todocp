import React from 'react';

import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import styleConstants from '../style';

const S = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontWeight: '800',
  },
});

function Button({
  primary = true,
  secondary,
  transparent,
  style,
  textStyle,
  title,
  ...otherProps
}) {
  const getComputedContainerStyle = () => {
    let backgroundColor = styleConstants.button.primary.backgroundColor;
    if (secondary) {
      backgroundColor = styleConstants.button.secondary.backgroundColor;
    } else if (transparent) {
      backgroundColor = styleConstants.button.transparent.backgroundColor;
    }
    return {backgroundColor};
  };

  const getComputedTextStyle = () => {
    let color = styleConstants.button.primary.text.color;
    if (secondary) {
      color = styleConstants.button.secondary.text.color;
    } else if (transparent) {
      color = styleConstants.button.transparent.text.color;
    }
    return {color};
  };

  const computedContainerStyle = getComputedContainerStyle();
  const computedTextStyle = getComputedTextStyle();

  return (
    <TouchableOpacity
      style={[S.container, computedContainerStyle]}
      {...otherProps}>
      <Text style={[S.text, computedTextStyle]}>{title.toUpperCase()} </Text>
    </TouchableOpacity>
  );
}

export default Button;
