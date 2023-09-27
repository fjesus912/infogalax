import { useState } from 'react'
import './App.css'
import quotes from "./db/quotes.json"
import { getRandomElement } from './utils/random'
import QuoteCard from './components/QuoteCard'

const backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10', 'bg11']
const planetBackground = ['planet1', 'planet2', 'planet3', 'planet4']


function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes))
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds))
  const [currentPlanetBg, setCurrentPlanetBg] = useState(getRandomElement(planetBackground))


  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes))
    setCurrentBg(getRandomElement(backgrounds))
    setCurrentPlanetBg(getRandomElement(planetBackground))
}

  return (
    <main className={`app ${currentBg}`}>
      <div className={`planet ${currentPlanetBg}`}></div>
      <QuoteCard quote={quote}
      handleChangeQuote={handleChangeQuote}
      currentPlanetBg={currentPlanetBg}
      />
    </main>
  )
}

export default App