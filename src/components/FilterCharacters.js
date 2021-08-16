function FilterCharacters({ setSelectedCategory }) {
    
    return(
        <div className='Filter'>
            <select name='filter' onChange={e => setSelectedCategory(e.target.value)}>
                <option value='All'>All</option>
                <option value='Alive'>Alive</option>
                <option value='Dead'>Dead</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>

        </div>
    )
}

export default FilterCharacters;