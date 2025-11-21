import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)  
  return (<>
        <div>
            <h1>Home Page</h1>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
            Click Me {count}
        </button>
    </>)
}

{/* <div>
        <h1>This is Simple Website</h1>
    </div>
    <button onClick={() => setCount((count) => count + 1)}>
        Click Me {count}
    </button> */}