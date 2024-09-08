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

  const inputHandler = (e) => {
    e.preventDefault();
    setTodo([...todo, { id: Date.now(), title: inputValue }])
    intervalRef.current.txt1.value = ''

  }

  const delHandler = (id) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo)
  }

  const doneHandler = () => {
    console.log("Done");
  }

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

export default App
