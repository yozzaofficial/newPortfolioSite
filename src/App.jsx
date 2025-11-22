import { useState } from 'react'
import Header from './components/Header'
import TrainerCard from './components/TrainerCard'
import Squad from './components/Squad'
import Medals from './components/Medals'
import NextMedals from './components/NextMedals'
import "./App.css"
function App() {

  return (
    <>
      <Header />
      <main>
        <TrainerCard />
        <Squad />
        <NextMedals />
        <Medals />
      </main>
    </>
  )
}

export default App
