import React from 'react';
import "./style/index.css";
import uuidv1 from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskText: '',
      list: [
        {
          id: 1,
          text: 'first',
          isDone: false,
        },
        {
          id: 2,
          text: 'second',
          isDone: true,
        }
      ],
    }
  }

  inputChangeHandler = (evt) => {
    this.setState({newTaskText: evt.target.value});
    return;
  };

  addBtnHandler = () => {
    let newList = this.state.list;

    newList.push({
      id: uuidv1(), 
      text: this.state.newTaskText,
      isDone: false,
    });

    this.setState({
        list: newList,
        newTaskText: ''
      });

    return;
  };

  deleteBtnHandler = (id) => {
    let newList = this.state.list;
    newList = newList.filter(item => item.id !== id);
    this.setState({list:newList});
  }

  doneBtnHandler = (id) => {
    let newList = this.state.list;
    newList = newList.map((item) => {
      if (item.id === id)
        item.isDone = !item.isDone;
      return item;
    });

    this.setState({list:newList});
  }

  inputChangeHandler = this.inputChangeHandler.bind(this);
  addBtnHandler = this.addBtnHandler.bind(this);
  deleteBtnHandler = this.deleteBtnHandler.bind(this);
  doneBtnHandler = this.doneBtnHandler.bind(this);

  render() {
    return(
      <div className="app"
        onKeyPress={(evt) => {if(evt.key === 'Enter' && this.state.newTaskText) this.addBtnHandler()}}
      >
        <Panel 
          inputChangeHandler = {this.inputChangeHandler}
          addBtnHandler = {this.addBtnHandler}
          newTaskText = {this.state.newTaskText}
          />
        <List 
          taskList = {this.state.list}
          deleteBtnHandler = {this.deleteBtnHandler}
          doneBtnHandler = {this.doneBtnHandler}
        />
      </div>
    )
  }
}

class Panel extends React.Component {
  
  render() {
    return(
      <div className="panel"
      >
        <button 
          id="addBtn"
          onClick={this.props.addBtnHandler}
          disabled={!this.props.newTaskText}
        >
           Add
        </button>
        <input 
          type="text"
          maxLength="26"
          id="newTaskInput"
          onChange={this.props.inputChangeHandler} 
          value={this.props.newTaskText} 
        /> 
      </div>
    )
  }
}

class List extends React.Component {
  render() {
    return(
      <div id="list">
        {this.props.taskList.map((item) => {
          return(
            <Item 
              id={item.id}
              text={item.text}
              isDone={item.isDone}
              deleteBtnHandler={this.props.deleteBtnHandler}
              doneBtnHandler = {this.props.doneBtnHandler}
            />
          )
        })}
      </div>
    )
  }
}

class Item extends React.Component {
	render() {
	  return(
      <div 
        className={this.props.isDone ? "item done" : "item"}
        id={this.props.id}
      >
        <p>{this.props.text}</p>

        <button
        className="doneBtn"
        onClick={() => {this.props.doneBtnHandler(this.props.id)}}
        >
          Done
        </button>

        <button
        className="deleteBtn"
        onClick={() => {this.props.deleteBtnHandler(this.props.id)}}
        >
          Delete
        </button>
      </div>
    )	
  }
}

export default App;
