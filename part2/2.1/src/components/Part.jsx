export default function Part({ course }) {
    return (
        <p>
            {course.name} {course.exercises}
        </p>
    )
}