export default function Total({ parts }) {

    let sum = 0;

    for (let i = 0; i < parts.length; i++) {
        sum += parts[i].exercises;
    }

    return (
        <div>
            <p>Total of : {sum} exercises</p>
        </div>
    )
}