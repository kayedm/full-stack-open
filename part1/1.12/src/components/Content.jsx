import Part from './Part'

export default function Content(props) {
    return (
        <div>
            <Part course={props.course.course[0]}/>
            <Part course={props.course.course[1]}/>
            <Part course={props.course.course[2]}/>
        </div>
    )
}