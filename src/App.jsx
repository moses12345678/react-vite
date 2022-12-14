import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hello from './Hello'
import Calcul from './Calcul'
import ListPlayer from './ListPlayer'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className="Container">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Hello name="aliou" />
      <div class="card">
        <button type='button' class='btn btn-success' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Calcul />
        <p>
           <ListPlayer />
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    </>
  )
}

export default App
