import { Card } from 'semantic-ui-react';

function EpisodeCard({ name, episode, airDate}) {
    return(
        <div className='episodes-container'>
            <Card className='episode-cards'>
                <Card.Content>
                    <Card.Header>
                        <h1>{name}</h1>
                    </Card.Header>
                    <Card.Meta>
                        <span>{episode}</span>
                    </Card.Meta>
                    <Card.Description>
                        <span>{airDate}</span>
                    </Card.Description>
                </Card.Content>

            </Card>

        </div>
    )
}

export default EpisodeCard;