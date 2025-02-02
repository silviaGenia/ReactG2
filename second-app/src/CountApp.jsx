import { useState } from "react"

export const CountApp = ({ value }) => {

  const [count, setCount] = useState(value)


  const handleAdd = () => {
    //console.log("Buenos dias")
    //count++
    setCount(count + 1)
  }
  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={handleAdd}>+1</button>
      <button>-1</button>
      <button>Reinicio</button>
    </>
  )
}


//