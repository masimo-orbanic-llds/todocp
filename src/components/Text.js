import React from 'react';
import {Text as RNText} from 'react-native';

import styleConstants from '../style';

function Text({small, large, style, ...otherProps}) {
  const getComputedStyle = () => {
    let fontSize = styleConstants.text.normal.fontSize;
    let color = styleConstants.text.normal.color;
    if (small) {
      fontSize = styleConstants.text.small.fontSize;
      color = styleConstants.text.small.color;
    } else if (large) {
      fontSize = styleConstants.text.large.fontSize;
      color = styleConstants.text.large.color;
    }
    return {fontSize, color};
  };

  const computedStyle = getComputedStyle();
  return <RNText style={[computedStyle, style]} {...otherProps} />;
}

export default Text;
