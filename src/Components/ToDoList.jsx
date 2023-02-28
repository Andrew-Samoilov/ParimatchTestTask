import ToDoListItem from "./ToDoListItem"
import css from "./ToDo.module.css";

export const ToDoList = ({ stateTodos, onToggleCompleted, onClick }) => (
    <ul className={css.toDoUl}>
        <span className={css.liHead}><span>Id</span><span>Title</span><span>Description</span><span>Completed</span></span> 
        {stateTodos.map(({ id, title, description, completed}) =>
            <li key={id}>
                <ToDoListItem 
                id={id}
                title={title}
                description={description}
                completed={completed}
                onToggleCompleted={() => onToggleCompleted(id)}   
                onClick={() => onClick(id)}
                />
            </li>
            )}  
    </ul>
);
