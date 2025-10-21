
export default function SearchInput({ search, setSearch }) {
    return (
        <div>
            <h2> Add a new name</h2>
            filter shown with:  <input value={search} onChange={e => setSearch(e.target.value)} />
        </div>
    )

}
