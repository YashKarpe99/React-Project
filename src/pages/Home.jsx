import { useState } from 'react'
import './Home.css'

export default function Home() {
  const [count, setCount] = useState(0)  
  return (<>
        <div className='Page'>
        <div>
            <h1>Home Page</h1>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
            Click Me {count}
        </button>
        </div>
    </>)
}