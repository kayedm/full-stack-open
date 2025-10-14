import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Total from './components/Total.jsx'

import { useState } from 'react'

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

   const total = bad + neutral + good;
   const average = total / 3;
   const positive = good / total * 100;


    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={() => setGood(good + 1)}>Good</button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setBad(bad + 1)}>Bad</button>
            <h1>Statistics</h1>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>All: {total}</p>
            <p>Average: {average}</p>
            <p>Positive: {positive} %</p>
        </div>
    )
}

export default App