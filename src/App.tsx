import React from 'react';
import {StatusBar} from 'react-native';
import {NativeRouter, BackButton} from 'react-router-native';
import Routes from './routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import '~/config/ReactotronConfig';
import {persistor, store} from '~/store';
declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" />
        <NativeRouter>
          <BackButton />
          <Routes />
        </NativeRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
