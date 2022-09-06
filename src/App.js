import { useEffect, useState } from 'react';
import './App.scss';
import PostList from './components/Postlist';
import TodoForm from './components/Todoform';
import Todolist from './components/Todolist';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Trần Văn Kiên" },
    { id: 2, title: "Hello world" },
    { id: 3, title: "Frontend" },
    { id: 4, title: "Backend" },
  ]);

  const [postLists, setpostlist] = useState([]);

  async function fetchPostlist() {
    const requestUrl = 'http://localhost:3001/posts';
    const respone = await fetch(requestUrl)
    const responeJSON = await respone.json();
    const data = responeJSON;
    setpostlist(data);
  }

  useEffect(() => {

    fetchPostlist();
    console.log(postLists, '2222');
  }, []);

  function handleTodoClick(todo) {
    console.log(todo)
    const index = todoList.findIndex(item => item.id = todo.id)
    if (index < 0) return
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)

  }
  function handleTodoFormSubmit(formValues) {
    console.log('form Submit', formValues)
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    const newTodoList = [...todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <h1>
        React hooks - TodoList
      </h1>


      <TodoForm onSubmit={handleTodoFormSubmit} />
      {/* <Todolist todos={todoList} onTodoClick={handleTodoClick} /> */}
      <PostList posts={postLists} />

    </div>
  );
}

export default App;
