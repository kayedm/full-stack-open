import filteredNames from '../App.jsx'

export default function NameList({ person, filteredNames }) {
    return (
        <div>
            <h2>Numbers</h2>
            {filteredNames().map((person) => (
                <li key={person.name}>
                    {person.name}  {person.phone}
                </li>
            ))}
        </div>
    )
}