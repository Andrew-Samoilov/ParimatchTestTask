import React from "react";
import AddToDoForm from "./AddToDoForm";
import { ToDoList } from "./ToDoList";
import css from "./ToDo.module.css";
import ToDoModal from './ToDoModal';

class App extends React.Component {
  state = {
    todos: [],
    MaxId: 0,
    showModal: false,
    currentId:0,
  }

  componentDidMount() {
    // console.log('App componentDidMount');

    const parsedTodos = JSON.parse(localStorage.getItem('todos'));
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }

    const parsedMaxId = JSON.parse(localStorage.getItem('MaxId'));
    if (parsedMaxId) {
      this.setState({ MaxId: parsedMaxId });
    }

  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      // console.log('update todos ');
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
      localStorage.setItem('MaxId', JSON.stringify(this.state.MaxId));
    }

  }

  formSubmitHandler = data => {
    const newData = {
      id: this.state.MaxId +1,
      title: data.title,
      description: data.description,
      completed: false,
    }
    console.log(`formSubmitHandler ${newData}`);
    this.setState(({ todos, MaxId }) => ({
      todos: [...todos, newData],
      MaxId: MaxId+1,
      }));
    
  };

  toggleCompleted = todoId => {
    console.log(`toggleCompleted , ${todoId}`);

    this.setState(({ state }) => ({ currentId: todoId }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  toggleModal = todoId => {
    console.log(` click ${todoId}`);
    this.setState(({ state }) => ({ currentId: todoId }));
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <div className={css.mainDiv}>
        <AddToDoForm onSubmit={this.formSubmitHandler} />

        {this.state.showModal && (
          <ToDoModal onClose={this.toggleModal}>
            <h1>{this.state.todos.find(({ id }) => id === this.state.currentId).title}</h1> 
            <h2>Description</h2>
            <p>{this.state.todos.find(({ id }) => id === this.state.currentId).description}</p>
            <input
              className={css.toDoChek}
              type="checkbox"
              onChange={this.toggleCompleted}
              defaultChecked={this.state.todos.find(({ id }) => id === this.state.currentId).completed}
            />
            <button type="button" onClick={this.toggleModal}>Close</button>
          </ToDoModal>
        )}

        <ToDoList
          onClick={this.toggleModal}
          stateTodos={this.state.todos}
          onToggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
