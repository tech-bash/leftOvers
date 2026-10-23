import { useState } from 'react'
import Counter from './LeftOvers/Counter'
import Dependency from './LeftOvers/Dependency'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dependency/>
    </>
  )
}

export default App
