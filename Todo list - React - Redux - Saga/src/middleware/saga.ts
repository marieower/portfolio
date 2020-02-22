import { all } from "redux-saga/effects";
import { ToDoApiSaga } from "../app/todo/saga";

export const rootSaga = function* root() {
  yield all([ToDoApiSaga.Initialize()]);
};

export function* safeSagaExecute(action: any, func: (a: any) => any) {
  try {
    yield func(action);
  } catch (error) {
    console.error(error);
  }
}
