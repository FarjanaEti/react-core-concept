
import Friends from '../Friends'
import User from '../User'
import './App.css'
import Team from './Team'

function App() {
  const handleClick=()=>{
    alert('error')
  }
  const handleClicked2=()=>{
    alert('gdgdshd')
  }
function addNumber(num){
alert(5+num)
}

  return (
    <>
       <h1>Vite + React</h1>
       <User></User>
       <Team></Team>
       <button onClick={handleClick}>Click Me</button>
       <button onClick={handleClicked2}>Clicked</button>
       <button onClick={()=>alert('arrow')}>Arrow</button>
       <button onClick={function handleButton(){
        alert("function")
       }}>Function</button>
       <button onClick={()=>addNumber(5)}>Parameter</button>
       <Friends></Friends>
    </>
  )
}

export default App
