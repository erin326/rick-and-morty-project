import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import CharacterHomePage from './CharacterHomePage';
import EpisodePage from './EpisodePage';
import Favorites from './Favorites';

function App() {


  const [characters, setCharacters] = useState([]);

  const [favorites, setFavorites] = useState([]);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
      <Route exact path='/episodes'>
        <EpisodePage />
        </Route>
        <Route exact path='/favorites'>
          <Favorites favorites={favorites} />
        </Route>
        <Route exact path='/'>
          <CharacterHomePage favorites={favorites} setFavorites={setFavorites} characters={characters} setCharacters={setCharacters}/>
        </Route>
      
     
      </Switch>

    </div>
  );
}

export default App;



