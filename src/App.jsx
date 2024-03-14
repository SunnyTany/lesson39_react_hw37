import ControledInput from './components/ControledInput'
import ControledInputClass from './components/ControledInputClass'
import UncontroledImage from './components/UncontroledImage'
import './App.css'

function App() {
  return (
    <>
      <h1>Controled component</h1>
      <ControledInput />
      <ControledInputClass />
      <hr />
      <h1>Uncontroled component</h1>
      <UncontroledImage src="../public/vite.svg" alt="Vite logo" />
    </>
  )
}

export default App