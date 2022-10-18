import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Basic from './view/Basic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Basic/>
    </div>
  )
}

export default App
