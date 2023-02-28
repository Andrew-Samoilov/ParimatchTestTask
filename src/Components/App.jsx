import React from "react";
import AddToDoForm from "./AddToDoForm";
import { ToDoList } from "./ToDoList";
import css from "./ToDo.module.css";

class App extends React.Component {
  state = {
    todos: [],
    MaxId: 0,
  }

  componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }

    const MaxId = localStorage.getItem('MaxId');
    const parsedMaxId = JSON.parse(MaxId);

    if (parsedMaxId) {
      this.setState({ MaxId: parsedMaxId });
    }

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      console.log('update todos ');
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
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  toggleModal = todoId => {
    console.log(` click ${todoId}`);
    // this.setState(({ showModal }) => ({
    //   showModal: !showModal,
    // }));
  };

  render() {
    return (
      <div className={css.mainDiv}>
        <AddToDoForm onSubmit={this.formSubmitHandler} />
        <ToDoList
          onClick={this.toggleModal}
          stateTodos={this.state.todos}
          onToggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
