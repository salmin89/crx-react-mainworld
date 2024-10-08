import { useState } from "react"

export function Demo() {
  const [state, setState] = useState(0)
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>State: {state}</p>
      <button onClick={() => setState(state + 1)}>Increment</button>

    </div>
  )
}