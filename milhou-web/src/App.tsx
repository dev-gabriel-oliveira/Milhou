import { useState } from 'react'
import './App.css'

import Header from './components/header';
import Footer from './components/footer';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div id="main">

        <h1>Calculadora</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>

      </div>

      <Footer />
    </>
  )
}