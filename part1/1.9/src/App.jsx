import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Total from './components/Total.jsx'

import {useState} from 'react'

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const statistics = {
        good,
        neutral,
        bad,
        all: good + bad + neutral,
        average: ((good + bad + neutral) / 3 ),
        positive: (good / (good + bad + neutral) * 100)
    }

    const hasFeedback = statistics.all > 0

    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={() => setGood(good + 1)}>Good</button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setBad(bad + 1)}>Bad</button>
            <h1>Statistics</h1>

            {hasFeedback ? (
                <>
                    <p>Good: {statistics.good}</p>
                    <p>Neutral: {statistics.neutral}</p>
                    <p>Bad: {statistics.bad}</p>
                    <p>All: {statistics.all}</p>
                    <p>Average: {statistics.average}</p>
                    <p>Positive: {statistics.positive} %</p>
                </>
            ) : (
                <p>No feedback selected</p>
            )}
        </div>
    )
}

export default App