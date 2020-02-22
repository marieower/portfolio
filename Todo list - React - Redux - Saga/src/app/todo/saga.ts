import { delay, put, takeEvery } from 'redux-saga/effects';
import { safeSagaExecute } from '../../middleware/saga';
import { IAction } from '../../store/IAction';
import { TODO_LOAD_DATA, todoActions } from './actions';
import { IToDo } from '../../shared/types/IToDo';

export class ToDoApiSaga {
  public constructor() {
    this.loadData = this.loadData.bind(this);
  }

  public static Initialize() {
    const saga = new ToDoApiSaga();
    return saga.watch();
  }

  public *watch() {
    yield takeEvery(TODO_LOAD_DATA, a => safeSagaExecute(a, this.loadData));
  }

  private *loadData(action: IAction) {
    yield delay(1000);
    
    const dto: IToDo[] = [{ id: "1", isDone: false, text: "one" }];
    
    yield put(todoActions.dataLoaded(dto));
  }
}
