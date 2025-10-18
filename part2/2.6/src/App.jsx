import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    function addNewName(e) {
        e.preventDefault()
        if (newName.trim() === '') { return }
        if (persons.some( persons => persons.name === newName.trim())) {
            alert("Name already exists!")
            return
        }

        const newNameObject = {
            name: newName,
        }

        const newArray = persons.concat(newNameObject)
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