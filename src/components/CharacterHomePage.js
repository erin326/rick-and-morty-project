import CharacterCard from './CharacterCard';

function CharacterPage({ characters }) {
    const displayCharacters = characters.map(character => (
        <CharacterCard key={character.id} id={character.id} name={character.name} image={character.image} species={character.species} gender={character.gender} status={character.status} origin={character.origin.name}/>
    ))
    return(
        <div>
            {displayCharacters}
      

        </div>
    )
}

export default CharacterPage;