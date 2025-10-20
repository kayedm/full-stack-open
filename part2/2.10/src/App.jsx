import {useState} from 'react'
import SearchInput from './components/SearchInput.jsx'
import AddName from "./components/AddName.jsx";
import NameList from './components/NameList.jsx'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', phone: '012-345-6789'}
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [search, setSearch] = useState('')

    function filteredNames () {
        return persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    }

    function addNewName(e) {
        e.preventDefault()
        if (newName.trim() === '') { return }
        if (persons.some( persons => persons.name === newName.trim())) {
            alert(`The name ${newName} already exists`)
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
            <SearchInput search={search} setSearch={setSearch} />
            <AddName newName={newName} setNewName={setNewName} newPhone={newPhone} setNewPhone={setNewPhone} addNewName={addNewName}  />
            <NameList persons={persons} filteredNames={filteredNames}/>
        </div>
    )
}

export default App