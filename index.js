/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginPage from './src/LoginPage';
import NewsPage from './src/NewsPage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginPage);
