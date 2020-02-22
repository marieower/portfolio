import { combineReducers } from 'redux';
import { ToDoReducer } from '../app/todo/reducer';
import { IRootState } from './state';

export const rootReducer = combineReducers<IRootState>({
  todo: ToDoReducer.Create(),
});
