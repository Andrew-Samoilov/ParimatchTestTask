import React from "react";
import css from "./ToDo.module.css";

class AddToDoForm extends React.Component {
    state = {
        title: '',
        description: '',
        completed: false,
    }

    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value, });
    };

    handleSubmit = e => {
        console.log(`AddToDoForm handleSubmit`, this.state);
        e.preventDefault();
        this.props.onSubmit(this.state);  
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={css.toDoForm}>
                <label className={css.toDoLabel}>Title:
                    <input
                        className={css.toDoField}
                        type="text"
                        name="title"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label className={css.toDoLabel}>Description:
                    <input
                        className={css.toDoField}
                        type="text"
                        name="description"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <button className={css.button} type="submit">Create</button>
            </form> 
        );
    }
}

export default AddToDoForm;
