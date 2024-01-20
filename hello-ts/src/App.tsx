import React from 'react'
import Todo from './components/Todo';

const myTodoItems = [
    {
        id: 101,
        task: "Solve Maths Problems"
    },
    {
        id: 102,
        task: "Solve DSA Que"
    },
    {
        id: 103,
        task: "I need to do react"
    },
    {
        id: 104,
        task: "Watch Videos"
    },
]
const App: React.FC = () => {
    return( 
    // <h1>Hello from App</h1>;
    <>
    <Todo items={myTodoItems}/>
    
    </>
    );
}
export default App;