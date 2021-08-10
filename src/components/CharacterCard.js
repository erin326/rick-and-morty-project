import { Card, Image } from 'semantic-ui-react'

function CharacterCard({ id, name, image, species, gender, status, origin }) {
    console.log(origin)
    return (
        <div className='cards-container'>
        <Card className='cards'>
            <div>
                <div className='image'>
                    <Image src={image} alt={name} />
                </div>
                <Card.Content>
                    <Card.Header>
                        <h2>{name}</h2>
                    </Card.Header>
                    <Card.Description>
                        {species} from {origin}
                    </Card.Description>
                    <Card.Meta>
                        <span>{gender}</span>
                    </Card.Meta>
                    <Card.Content extra>
                        <span>Status: {status}</span>
                    </Card.Content>

                </Card.Content>

            </div> 
        </Card>
        </div>
    )
}

export default CharacterCard;