import { IActionPayloaded } from "../../store/IAction";
import { IReducerPayloaded } from "../../store/IReducer";
import { IToDoState } from "./state";
import {
  TODO_DATA_LOADED,
  TODO_INPUT_CHANGED,
  TODO_ADD_BTN_CLICKED,
  TODO_DELETE_BTN_CLICKED,
  TODO_DONE_BTN_CLICKED
} from "./actions";
import uuidv1 from "uuid/v1";

const initialState: IToDoState = {
  newToDo: "",
  list: []
};

export class ToDoReducer implements IReducerPayloaded<IToDoState> {
  constructor() {
    this.reduce = this.reduce.bind(this);
  }

  public static Create() {
    const reducer = new ToDoReducer();
    return reducer.reduce;
  }

  public reduce(
    state: IToDoState = initialState,
    action: IActionPayloaded<any>
  ): IToDoState {
    let newState = { ...state };

    switch (action.type) {
      case TODO_DATA_LOADED:
        newState.list = [...action.payload];
        break;
      case TODO_INPUT_CHANGED:
        newState.newToDo = action.payload;
        break;
      case TODO_ADD_BTN_CLICKED:
        if (newState.newToDo !== '') {
          newState.list.push({
            id: uuidv1(),
            isDone: false,
            text: newState.newToDo
          });
          newState.newToDo = '';
        }
        break;
      case TODO_DELETE_BTN_CLICKED:
        newState.list = newState.list.filter(
          item => item.id !== action.payload
        );
        break;
      case TODO_DONE_BTN_CLICKED:
        newState.list = newState.list.map(item => {
          if (item.id === action.payload) {
            item.isDone = !item.isDone;
          }
          return item;
        });
        break;
    }

    return newState;
  }
}
