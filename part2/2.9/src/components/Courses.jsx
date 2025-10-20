import Course from "./Course.jsx";

export default function Courses({ courses }) {
    return (
        <div>
            {courses.map(course => (
                <Course key={course.id} course={course} />
            ))
            }
        </div>
    )
};