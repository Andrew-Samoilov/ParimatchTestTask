import React from 'react';
import css from "./ToDo.module.css";

const ToDoListItem = ({ id, title, description, completed, onToggleCompleted, onClick }) => (
    <div className={css.liItem}>
        <span onClick={onClick}>{id}. </span>
        <span onClick={onClick}>{
            title.length > 12 ?
            title.slice(0, 9) + `...` :
            title}
        </span>
        <span onClick={onClick}>{
            description.length > 22 ?
            description.slice(0, 19) + `...` :
            description}
        </span>  
        <input
            className={css.toDoChek}
            type="checkbox"
            onChange={onToggleCompleted}
            defaultChecked={completed}        
        />
    </div>
);

export default ToDoListItem;
