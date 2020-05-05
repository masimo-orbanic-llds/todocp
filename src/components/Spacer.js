import React from 'react';
import {View} from 'react-native';

import styleConstants from '../style';

function Spacer({small, medium, large}) {
  const getSize = () => {
    if (small) {
      return styleConstants.spacing.small;
    } else if (medium) {
      return styleConstants.spacing.medium;
    } else if (large) {
      return styleConstants.spacing.large;
    } else {
      return 0;
    }
  };
  const size = getSize();
  return <View style={{width: size, height: size}} />;
}
export default Spacer;
