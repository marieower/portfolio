import { IToDo } from '../../shared/types/IToDo';

export interface IToDoState {
  newToDo: string;
  list: IToDo[];
}