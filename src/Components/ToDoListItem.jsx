import React from 'react';
import css from "./ToDo.module.css";

const ToDoListItem = ({ id, title, description, completed, onToggleCompleted, onClick }) => (
 
    <div onClick={onClick} className={css.liItem}>
        <span>{id}. </span>
        <span>{
            title.length > 12 ?
            title.slice(0, 9) + `...` :
            title}
        </span>
        <span>{
            description.length > 22 ?
            description.slice(0, 19) + `...` :
            description}
        </span>  
        <input
            type="checkbox"
            onChange={onToggleCompleted}
            defaultChecked={completed}
        />
    </div>
);

export default ToDoListItem;
