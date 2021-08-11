import { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import SearchCharacters from './SearchCharacters';
import FilterCharacters from './FilterCharacters';

function CharacterPage({onAddFavorite, characters, setCharacters }) {

    const [selectedCategory, setSelectedCategory] = useState('All');


    useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
      .then(resp => resp.json())
      .then(data => {
        setCharacters(data.results)
      })
  
    }, [])

    const [search, setSearch] = useState('');

    const searchedCharacters = characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()))
    .filter(character => {
        if(selectedCategory === 'All') {
            return true;
        }else if(selectedCategory === 'Female' || selectedCategory === 'Male'){
            return character.gender === selectedCategory;
        } else{
            return character.status === selectedCategory;
        }
    })

    return(
        <div>
            <FilterCharacters setSelectedCategory={setSelectedCategory} />
            <SearchCharacters search={search} setSearch={setSearch} />
            
            <CharacterList onAddFavorite={onAddFavorite} characters={searchedCharacters} />

        </div>
    )
}

export default CharacterPage;