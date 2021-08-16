import { useState, useEffect } from 'react';
import EpisodeList from './EpisodeList';
import SearchEpisodes from './SearchEpisodes';


function EpisodePage() {

    const [episodes, setEpisodes] = useState([]);

    const [episodeSearch, setEpisodeSearch] = useState('');


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
        .then(resp => resp.json())
        .then(data => setEpisodes(data.results))

    }, [])

    const searchedEpisodes = episodes.filter(episode => episode.name.toLowerCase().includes(episodeSearch.toLowerCase()))

    
    return(
        <div>

            <SearchEpisodes episodeSearch={episodeSearch} setEpisodeSearch={setEpisodeSearch} />
            <EpisodeList episodes={searchedEpisodes} />
        
        </div>
    )
}

export default EpisodePage;