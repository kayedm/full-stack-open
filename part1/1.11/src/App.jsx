import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Total from './components/Total.jsx'
import Button from './components/Button.jsx'
import StatisticLine from './components/StatisticsLine.jsx'
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
        average: ((good + bad + neutral) / 3),
        positive: (good / (good + bad + neutral) * 100)
    }

    const hasFeedback = statistics.all > 0;

    return (
        <div>
            <h1>Give feedback</h1>
            <Button
                setGood={setGood}
                setNeutral={setNeutral}
                setBad={setBad}
                good={good}
                neutral={neutral}
                bad={bad}
            />
            <h1>Statistics</h1>
            <StatisticLine statistics={statistics} hasFeedback={hasFeedback} />
        </div>
    )
}

export default App