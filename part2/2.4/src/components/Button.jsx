

export default function Button (props) {
    const {setGood, setNeutral, setBad, good, neutral, bad} = props;
    return (
        <div>
            <button onClick={() => setGood(good + 1)}>Good</button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setBad(bad + 1)}>Bad</button>
        </div>
    )
}