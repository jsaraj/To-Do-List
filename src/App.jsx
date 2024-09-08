import { useState, useRef, useEffect } from 'react'
import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'
import List from './components/List'
import Form from './components/Form'

function App() {


  const [inputValue, setInputValue] = useState('');
  const [todo, setTodo] = useState([]);
  const intervalRef = useRef(0);

  useEffect(() => {
    const getTodo = JSON.parse(localStorage.getItem("todos"));
    setTodo(getTodo);
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todo))
  },[todo])



  const inputHandler = (e) => {
    e.preventDefault();
    setTodo([...todo, { id: Date.now(), title: inputValue, done: false }])
    intervalRef.current.txt1.value = ''

  }

  const delHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      const newTodo = todo.filter((item) => item.id !== id);
      setTodo(newTodo);
    }

  }

  const doneHandler = (id) => {
    const doneTodo = todo.findIndex((item) => item.id === id);
    todo[doneTodo].done = !todo[doneTodo].done
    setTodo([...todo])
  }
  if (todo.length <= 0) {
    return (
      <Layout>
        <Header />
        <Form change={(e) => setInputValue(e.target.value)} inputHandler={inputHandler} intervalRef={intervalRef} />
        <h2 className='flex justify-center pb-5 pt-10 text-xl'>
          There isnt any Todo in list
        </h2>
      </Layout>
    )
  }
  else {
    return (
      <>
        <Layout>
          <Header />
          <Form change={(e) => setInputValue(e.target.value)} inputHandler={inputHandler} intervalRef={intervalRef} />
          <List delHandler={delHandler} doneHandler={doneHandler} todos={todo} />
        </Layout>
      </>
    )
  }

}

export default App
