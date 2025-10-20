import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', phone: '012-345-6789'}
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    function addNewName(e) {
        e.preventDefault()
        if (newName.trim() === '') { return }
        if (persons.some( persons => persons.name === newName.trim())) {
            alert(`The name ${newName} already exists!`)
            return
        }
        if (newPhone.trim() === '') { return }
        if (persons.some( persons => persons.name === newPhone.trim())) {
            alert(`The phone number ${newPhone} already exists!`)
            return
        }

        const newPersonsObject = {
            name: newName, phone: newPhone,
        }

        const newArray = persons.concat(newPersonsObject)
        setPersons(newArray)
        setNewName('')
        setNewPhone('')
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
                    phone number: <input
                    value={newPhone}
                    onChange={e => setNewPhone(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <li key={person.name}>
                    {person.name}  {person.phone}
                </li>
            ))}
        </div>
    )
}

export default App