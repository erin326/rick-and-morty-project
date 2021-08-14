import { Card, Image, Button } from 'semantic-ui-react'
import { useState } from 'react';

function CharacterCard({ characters,  id, name, image, species, gender, status, origin, favorites, setFavorites }) {

    const [isFavorited, setIsFavorited] = useState(false);
    

    function handleAddFavorite(id) {
        console.log('clicked')
         const newCharacters =  characters.filter(character => {
              if(character.id === id) {
               
                 setFavorites([...favorites, character])
                  setIsFavorited(isFavorited => !isFavorited);
                  
              }else{
                  
                  return character;
              }
          })
    
      }

  
    
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
                    <Button onClick={() => handleAddFavorite(id)}
                    icon={isFavorited ? 'heart' : 'heart outline'} />
                 
                    <br></br>

                </Card.Content>

            </div> 
        </Card>
        </div>
    )
}

export default CharacterCard;


// {isFavorited ? (
//     <button className='favorite-button' onClick={() => onAddFavorite(id)}>Added to Favorites</button>
//          ) : (
//               <button onClick={() => onAddFavorite(id)}>Add to Favorites</button>
//                       )}