import { IActionCreator } from '../../store/IAction';
import { IToDo } from '../../shared/types/IToDo';

export const TODO_LOAD_DATA = 'TODO_LOAD_DATA';
export const TODO_DATA_LOADED = 'TODO_DATA_LOADED';
export const TODO_INPUT_CHANGED = 'TODO_INPUT_CHANGED';
export const TODO_ADD_BTN_CLICKED = 'TODO_ADD_BTN_CLICKED';
export const TODO_DELETE_BTN_CLICKED = 'TODO_DELETE_BTN_CLICKED';
export const TODO_DONE_BTN_CLICKED = 'TODO_DONE_BTN_CLICKED';

export const todoActions: IActionCreator = {
  loadData: () => ({ type: TODO_LOAD_DATA }),
  dataLoaded: (payload: IToDo[]) => ({
    type: TODO_DATA_LOADED,
    payload,
  }),
  inputChangeHandler: (newToDo: string) => ({
    type: TODO_INPUT_CHANGED,
    payload: newToDo,
  }),
  addBtnHandler: () => ({ type: TODO_ADD_BTN_CLICKED }),
  deleteBtnHandler: (id: string) => ({
    type: TODO_DELETE_BTN_CLICKED,
    payload: id,
  }),
  doneBtnHandler: (id: string) => ({
    type: TODO_DONE_BTN_CLICKED,
    payload: id,
  }),
};
