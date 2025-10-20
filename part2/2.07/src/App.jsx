import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', phone: '012-345-6789'}
    ])
    const [newName, setNewName] = useState('')

    function addNewName(e) {
        e.preventDefault()
        if (newName.trim() === '') { return }
        if (persons.some( persons => persons.name === newName.trim())) {
            alert(`The name ${newName} already exists!`)
            return
        }

        const newObject = {
            name: newName,
        }

        const newArray = persons.concat(newObject)
        setPersons(newArray)
        setNewName('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addNewName}>
                <div>
                    name: <input
                    value={newName}
                    onChange={e => setNewName(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <li key={person.name}>
                    {person.name}
                </li>
            ))}
        </div>
    )
}

export default App