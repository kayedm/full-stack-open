export default function Total({ parts }) {

    let initialvalue = 0;

    const total = parts.reduce((acc, cur) => acc + cur.exercises, initialvalue);

    return (
        <div>
            <p>Total of : {total} exercises</p>
        </div>
    )
}