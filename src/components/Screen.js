import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import styleConstants from '../style';

const S = StyleSheet.create({
  container: {
    backgroundColor: styleConstants.backgroundColor,
    paddingHorizontal: styleConstants.spacing.medium,
    flex: 1,
  },
});

function Screen({noScroll, style, contentContainerStyle, ...otherProps}) {
  const Container = noScroll ? View : ScrollView;
  return (
    <Container
      style={[S.container, style]}
      contentContainerStyle={[S.container, contentContainerStyle]}
      contentInsetAdjustmentBehavior="automatic"
      {...otherProps}
    />
  );
}

export default Screen;
