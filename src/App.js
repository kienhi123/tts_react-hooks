import { useEffect, useState } from 'react';
import './App.scss';
import queryString from 'query-string'
import Pagination from './components/Pagination';
import PostFilterForm from './components/PostFilterForm';
import PostList from './components/Postlist';
import TodoForm from './components/Todoform';
import Todolist from './components/Todolist';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Trần Văn Kiên" },
    { id: 2, title: "Hello world" },
    { id: 3, title: "Frontend" },
    { id: 4, title: "Backend" },
  ]);

  const [postLists, setpostlist] = useState([]);
  const [pagination, setpagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,

  });

  async function fetchPostlist() {
    const paramsString = queryString.stringify(filters)
    const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
    const respone = await fetch(requestUrl)
    const responeJSON = await respone.json();
    console.log({ responeJSON })
    const { data, pagination } = responeJSON;
    setpostlist(data);
    setpagination(pagination)
  }
  useEffect(() => {
    fetchPostlist();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log('New page', newPage)
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  function handleTodoClick(todo) {

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


  function handleFilterChange(newFilters) {
    console.log('New Filters:', newFilters)
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.search,
    });
  }

  const [showClock, setShowClock] = useState(true)
  return (
    <div className="App">
      <h1>
        React hooks - Clock
      </h1>
      {showClock && <Clock />}
      <BetterClock />
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
      {/* 
      <PostFilterForm onSubmit={handleFilterChange} /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <Todolist todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <PostList posts={postLists} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}






    </div>
  );
}

export default App;
