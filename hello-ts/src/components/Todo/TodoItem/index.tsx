import React from 'react'
interface TodoItemsProps {
    id?: number;
    title?: string;
}
const TodoItem : React.FC<TodoItemsProps> = (props) => {
    return <li>{props.id} {props.title}</li>
} 
export default TodoItem;