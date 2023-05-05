import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Caroulel from './Components/Crousel/Caroulel'
import Card from './Components/Card/Card/Card'
import Section1 from './Components/section1/Section1'
import Section2 from './Components/section2/Section2'
import ChefDetails from './Components/ChefDetails/ChefDetails'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Caroulel></Caroulel>
      <ChefDetails></ChefDetails>
      <Card></Card>
      <Section1></Section1>
      <Section2></Section2>
    </div>
  )
}

export default App
