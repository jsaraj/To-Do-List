import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'
import List from './components/List'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Header />
        <Form/>
        <List/>
      </Layout>
    </>
  )
}

export default App
