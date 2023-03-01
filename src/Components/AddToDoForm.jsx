import React from "react";
import css from "./ToDo.module.css";

class AddToDoForm extends React.Component {
    state = {
        title: '',
        description: '',
        titleErrorVisible: false,
        descriptionErrorVisible: false,
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.currentTarget.name]: e.currentTarget.value, });
        this.setState({ descriptionErrorVisible: false });
        this.setState({ titleErrorVisible: false });
    };

    handleSubmit = e => {
        e.preventDefault();
        // console.log(`AddToDoForm handleSubmit`, this.state);
        if (!this.state.title) {
            this.setState({ titleErrorVisible:true });
        }

        if (!this.state.description) {
            this.setState({ descriptionErrorVisible: true });
        } 

        if (this.state.description || this.state.title) {
            this.props.onSubmit(this.state); 
        } 
        
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={css.toDoForm}>
                <label className={css.toDoLabel}>Title:
                    <input
                        className={css.toDoField}
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        value={this.state.name}      
                        onChange={this.handleChange}
                        // required= "The field is required"
                    />
                    {this.state.titleErrorVisible &&(
                        <div className={css.errorMsg}>This field is empty</div>
                    )}               
                </label>
                <label className={css.toDoLabel}>Description:
                    <input
                        className={css.toDoField}
                        type="text"
                        name="description"
                        placeholder="Enter description"
                        value={this.state.name}
                        onChange={this.handleChange}
                        // required
                    />
                    {this.state.descriptionErrorVisible && (
                        <div className={css.errorMsg}>This field is empty</div>
                    )} 
                </label>
                <button className={css.button} type="submit">Create</button>
            </form> 
        );
    }
}

export default AddToDoForm;
