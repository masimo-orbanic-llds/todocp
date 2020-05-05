import React from 'react';
import {Text as RNText} from 'react-native';

import styleConstants from '../style';

function Text({small, large, style, secondaryColor, ...otherProps}) {
  const getComputedFontSize = () => {
    let fontSize = styleConstants.text.normal.fontSize;
    if (small) {
      fontSize = styleConstants.text.small.fontSize;
    } else if (large) {
      fontSize = styleConstants.text.large.fontSize;
    }
    return fontSize;
  };

  const getComputedColor = () => {
    let color = styleConstants.text.normal.color;
    if (secondaryColor) {
      color = styleConstants.text.secondaryColor;
    } else if (small) {
      color = styleConstants.text.small.color;
    } else if (large) {
      color = styleConstants.text.large.color;
    }
    return color;
  };

  const computedStyle = {
    fontSize: getComputedFontSize(),
    color: getComputedColor(),
  };
  return <RNText style={[computedStyle, style]} {...otherProps} />;
}

export default Text;
