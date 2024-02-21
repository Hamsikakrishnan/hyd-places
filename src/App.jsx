import './App.css'
import data from './data.js'
import Place from './Place.jsx'
function App() {
  const m = data.map(item =>{
    return <Place 
         key = {item.id}
         {...item}
    />
  })
  return (
    <>
      <h1 className ="Heading" >Popular Historical Places to visit in Hyderabad</h1>
      <div>{m}</div>
    </>
  )
}

export default App
