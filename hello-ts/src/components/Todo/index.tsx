import React from "react";
import TodoItem from "./TodoItem";


interface TodoItemIF{
  id: number,
  task: string
}
interface TodoItemArrayIF{
  items: TodoItemIF[]
}
const Todo: React.FC<TodoItemArrayIF> = (props) => {
  return (
    <ol>
      {props.items.map((item) => <TodoItem key={item.id} title={item.task} id={item.id}/>)}
      {/* <TodoItem title="code"/>
      <TodoItem title="code"/>
      <TodoItem title="code"/> */}
    </ol>
  );
};
export default Todo;
