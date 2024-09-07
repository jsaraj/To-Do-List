import { useState,useRef } from 'react'
import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'
import List from './components/List'
import Form from './components/Form'

function App() {

  const [inputValue, setInputValue] = useState('');
  const intervalRef = useRef(0);

  const inputHandler = (e) => {
    e.preventDefault();
    console.log(inputValue)
    intervalRef.current.txt1.value=''
  }

  const delHandler = () => {
    console.log("Delete");
  }

  const doneHandler = () => {
    console.log("Done");
  }

  return (
    <>
      <Layout>
        <Header />
        <Form change={(e)=>setInputValue(e.target.value)} inputHandler={inputHandler} intervalRef={intervalRef} />
        <List delHandler={delHandler} doneHandler={doneHandler} />
      </Layout>
    </>
  )
}

export default App
