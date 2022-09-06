
import { useState } from 'react';
import './App.scss';
import Todolist from './components/Todolist';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Trần Văn Kiên" },
    { id: 2, title: "Hello world" },
    { id: 3, title: "Frontend" },
    { id: 4, title: "Backend" },
  ]);
  function handleTodoClick(todo) {
    console.log(todo)
    const index = todoList.findIndex(item => item.id = todo.id)
    if (index < 0) return

    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)


  }

  return (
    <div className="App">
      <h1>
        React hooks - TodoList
      </h1>
      <Todolist todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
