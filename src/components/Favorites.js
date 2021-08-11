import CharacterCard from "./CharacterCard";

function Favorites({ favorites }) {

const displayFavorites = favorites.map(favorite => (
    <CharacterCard />
))
   return (
        <div>
            {displayFavorites}
        </div>
   )
}

export default Favorites;