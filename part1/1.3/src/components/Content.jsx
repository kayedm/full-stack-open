import Part1 from './parts/Part1'
import Part2 from './parts/Part2'
import Part3 from './parts/Part3'

export default function Content(props) {
    return (
        <div>
            <Part1 part={props.part1.name} exercise={props.part1.exercises}/>
            <Part2 part={props.part2.name} exercise={props.part2.exercises}/>
            <Part3 part={props.part3.name} exercise={props.part3.exercises}/>
        </div>
    )
}