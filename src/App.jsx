import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <h2 className='justify-center flex'>jaber</h2>
      </Layout>
    </>
  )
}

export default App
