function SearchCharacters({ episodeSearch, setEpisodeSearch }) {

    return(
    
        <div className='ui-search'>
            <div className='ui icon input'>
                <input value={episodeSearch} onChange={e => setEpisodeSearch(e.target.value)}/>
                <i className='search icon'/>
            </div>
        </div>
    )
}

export default SearchCharacters;