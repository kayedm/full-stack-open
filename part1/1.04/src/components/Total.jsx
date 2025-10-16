export default function Total(props) {
    return (
        <div>Number of exercise: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }</div>
    )
}