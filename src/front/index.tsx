import './styles';
import {h} from 'preact';
import { Provider } from 'redux-zero/preact';
import store from './store';
import App from './common /app';

export default () => <Provider store={store}>
  <App />
</Provider>;
