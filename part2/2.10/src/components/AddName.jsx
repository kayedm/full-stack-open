import addNewName from '../App.jsx'

export default function AddName({newName, setNewName, newPhone, setNewPhone, addNewName }) {
    return (
        <div>
            <h2> Add a new name</h2>
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
        </div>
    )
}