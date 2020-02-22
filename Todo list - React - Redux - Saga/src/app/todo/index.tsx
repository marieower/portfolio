import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../store/state";
import { todoActions } from "./actions";
import { IToDo } from "../../shared/types/IToDo";

interface IToDoProps {
  newToDo: string;
  list: IToDo[];
  actions: any;
}

class ToDo extends React.Component<IToDoProps> {
  public constructor(props: IToDoProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.actions.loadData();
  }

  public render() {
    const { newToDo, list } = this.props;

    return (
      <div id="app">
        <div
          id="panel"
          onKeyPress={evt => {
            if (evt.key === "Enter") this.props.actions.addBtnHandler();
          }}
        >
          <button id="add" onClick={this.props.actions.addBtnHandler}>
            ADD
          </button>
          <input
            type="text"
            id="newTodo"
            placeholder="Type text here"
            value={newToDo}
            onChange={evt => {
              this.props.actions.inputChangeHandler(evt.target.value);
            }}
          />
        </div>

        <div id="container">
          {list.map(item => {
            return (
              <div
                className={item.isDone ? "item line-through" : "item"}
                key={item.id}
              >
                <span className="item__text">{item.text}</span>
                <button
                  className={
                    item.isDone ? "acceptBtn acceptBtn--active" : "acceptBtn"
                  }
                  onClick={() => {
                    this.props.actions.doneBtnHandler(item.id);
                  }}
                >
                  Done
                </button>
                <button
                  className="deleteBtn"
                  onClick={() => {
                    this.props.actions.deleteBtnHandler(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  newToDo: state.todo.newToDo,
  list: state.todo.list
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
