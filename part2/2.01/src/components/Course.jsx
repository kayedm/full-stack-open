import Header from './Header';
import Content from './Content';
import Part from './Part';

export default function Course ({ course }) {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}