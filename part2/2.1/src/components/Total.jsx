export default function Total(props) {
    return (
        <div>Number of exercise: {props.course.course[0].exercises + props.course.course[1].exercises + props.course.course[2].exercises }</div>
    )
}