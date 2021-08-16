import CharacterCard from './CharacterCard';

function CharacterList({characters, favorites, setFavorites, setCharacters }) {

    const displayCharacters = characters.map(character => (
        <CharacterCard key={character.id} id={character.id} name={character.name} image={character.image} species={character.species} gender={character.gender} status={character.status} origin={character.origin.name} characters={characters}
        favorites={favorites}
        setFavorites={setFavorites}
        setCharacters={setCharacters}
        />
    ));


    return(
        <div>
            {displayCharacters}
        </div>
    )
}

export default CharacterList;