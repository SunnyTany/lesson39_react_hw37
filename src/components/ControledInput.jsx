import { useState } from "react"

const ControledInput = () => {
  const [value, setValue] = useState("")

  const onChangeHandler = (e) => {
    setValue(e.target.value)
    console.log(e.target.value);
  }

  return (
    <input type="text" value={value} placeholder={value} onChange={onChangeHandler} />
  )
}

export default ControledInput