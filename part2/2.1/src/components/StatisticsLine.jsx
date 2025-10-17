export default function StatisticsLine(props) {

    const {statistics, hasFeedback} = props;

    return (
        <div>
        {hasFeedback ? (
                <table>
                    <tbody>
                        <tr>
                            <td>good</td>
                            <td>{statistics.good}</td>
                        </tr>
                        <tr>
                            <td>neutral</td>
                            <td>{statistics.neutral}</td>
                        </tr>
                        <tr>
                            <td>bad</td>
                            <td>{statistics.bad}</td>
                        </tr>
                        <tr>
                            <td>all</td>
                            <td>{statistics.all}</td>
                        </tr>
                        <tr>
                            <td>average</td>
                            <td>{statistics.average.toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td>positive</td>
                            <td>{statistics.positive.toFixed(1)} %</td>
                        </tr>
                    </tbody>
                </table>
        ) : (<p>No feedback selected</p>)}
    </div>
    )
}