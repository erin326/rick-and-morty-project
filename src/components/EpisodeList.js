
import EpisodeCard from './EpisodeCard';

function EpisodeList({ episodes }) {

    

    const displayEpisodes = episodes.map(episode => (
        <EpisodeCard key={episode.id} id={episode.id} name={episode.name} airDate={episode.air_date} episode={episode.episode} />
    ))
    return (
        <div>
            {displayEpisodes}

        </div>
    )
}

export default EpisodeList;  