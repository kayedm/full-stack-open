export default function Part(props) {
    return (
        <p>
            {props.course.name} {props.course.exercises}
        </p>
    )
}