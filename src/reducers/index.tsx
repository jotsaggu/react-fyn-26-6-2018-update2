import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Authentication } from './authentication';

const Reducer = combineReducers({
  Authentication,
  form: formReducer,
});

export default Reducer;