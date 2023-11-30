import { combineReducers } from 'redux';

import { reduccer as authReducer } from './auth';
import { reduccer as crudReducer } from './crud';
import { reduccer as erpReducer } from './erp';
import { reduccer as settingsReducer } from './settings';
import { reduccer as translateReducer } from './translate';

import * as actionTypes from './auth/types';

const appReducer = combineReducers({
  auth: authReducer,
  crud: crudReducer,
  erp: erpReducer,
  settings: settingsReducer,
  translate: translateReducer,
});

const rootReducer = (state, action) => {
  if (action.type === actionTypes.LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
