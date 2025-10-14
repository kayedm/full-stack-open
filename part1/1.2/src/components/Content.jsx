import Part1 from './parts/Part1'
import Part2 from './parts/Part2'
import Part3 from './parts/Part3'

export default function Content(props) {
    return (
        <div>
            <Part1 part={props.part1} exercise={props.exercises1}/>
            <Part2 part={props.part2} exercise={props.exercises2}/>
            <Part3 part={props.part3} exercise={props.exercises3}/>
        </div>
    )
}