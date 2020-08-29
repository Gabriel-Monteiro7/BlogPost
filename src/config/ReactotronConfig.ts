import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: any;
  }
}

interface PluginConfig {
  except?: string[];
}

if (__DEV__) {
  const tron = Reactotron.configure({
    name: 'BlogPosts',
    port: 9090,
    host: 'localhost',
  })
    .use(reactotronRedux())
    .use(sagaPlugin({except: ['']}))
    .connect();
  tron.clear!();

  console.tron = tron;
}
