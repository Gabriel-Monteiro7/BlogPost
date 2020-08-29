import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'BlogPosts',
      storage: AsyncStorage,
      whitelist: ['post'],
    },
    reducers,
  );
  return persistedReducer;
};
