import './App.css'
import Button from './Button.jsx'

function App() {
       const popup = (name) =>{
         alert(`hi ${name}`)
    }

    const txt = (name) =>{
    const greet = window.prompt(`write your name`);
       alert(`Hi ${greet || name}`)
    }
  return (
    <>
     <Button children={<h5>Click</h5>} clickFunction = {popup} classes= 'red'/>
     <Button children="edit" classes = 'blue' clickFunction = {txt} />
    </>
  )
}

export default App
