import CharacterCard from './CharacterCard';

function CharacterList({ onAddFavorite, characters }) {

    const displayCharacters = characters.map(character => (
        <CharacterCard key={character.id} id={character.id} name={character.name} image={character.image} species={character.species} gender={character.gender} status={character.status} origin={character.origin.name} onAddFavorite={onAddFavorite}/>
    ));




    return(
        <div>
            {displayCharacters}
        </div>
    )
}

export default CharacterList;