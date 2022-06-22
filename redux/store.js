import { configureStore , combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const initialState = {
    navigation: {
      "top": false,
      "bottom": false,
      "stack": false,
      "drawer": false
    },
    topNavigation: {
      "first": false,
      "second": false,
      "third": false,
      "fourth": false
    },
    bottomNavigation:  {
      "first": false,
      "second": false,
      "third": false,
      "fourth": false
    },
    stackNavigation:  {
      "first": false,
      "second": false,
      "third": false,
      "fourth": false
    },
    drawerNavigation:  {
      "first": false,
      "second": false,
      "third": false,
      "fourth": false
    },
  };

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

const rootReducer = persistReducer(persistConfig, combineReducers(reducers))
const store = configureStore(rootReducer , initialState, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor}
