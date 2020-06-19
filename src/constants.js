import {Platform} from 'react-native';

export const ASYNC_STORAGE_KEY = '@TodoCP';
export const DEPLOYMENT_KEY =
  Platform.OS === 'android' ? 'androidKeyHere' : 'iosKeyHere';
