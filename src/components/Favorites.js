import CharacterCard from "./CharacterCard";

function Favorites({ favorites }) {

const displayFavorites = favorites.map(favorite => (
    <CharacterCard key={favorite.name} id={favorite.id} name={favorite.name} image={favorite.image} species={favorite.species} gender={favorite.gender} status={favorite.status} origin={favorite.origin.name} />
))
   return (
        <div>
            {displayFavorites}
        </div>
   )
}

export default Favorites;