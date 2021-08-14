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

  // useEffect(async () => {
  //   let savedFavorite = await localStorage.getItem('Favorite')

  // }, [])


  



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



/*

(20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0:
created: "2017-11-04T18:48:46.250Z"
episode: (41) ....
gender: "Male"
id: 1
image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
location:
name: "Earth (Replacement Dimension)"
url: "https://rickandmortyapi.com/api/location/20"
[[Prototype]]: Object
name: "Rick Sanchez"
origin:
name: "Earth (C-137)"
url: "https://rickandmortyapi.com/api/location/1"
[[Prototype]]: Object
species: "Human"
status: "Alive"
type: ""
url: "https://rickandmortyapi.com/api/character/1"
[[Prototype]]: Object
1: {id: 2, name: "Morty Smith", status: "Alive", species: "Human", type: "", …}
2: {id: 3, name: "Summer Smith", status: "Alive", species: "Human", type: "", …}
3: {id: 4, name: "Beth Smith", status: "Alive", species: "Human", type: "", …}
4: {id: 5, name: "Jerry Smith", status: "Alive", species: "Human", type: "", …}
5: {id: 6, name: "Abadango Cluster Princess", status: "Alive", species: "Alien", type: "", …}
6: {id: 7, name: "Abradolf Lincler", status: "unknown", species: "Human", type: "Genetic experiment", …}
7: {id: 8, name: "Adjudicator Rick", status: "Dead", species: "Human", type: "", …}
8: {id: 9, name: "Agency Director", status: "Dead", species: "Human", type: "", …}
9: {id: 10, name: "Alan Rails", status: "Dead", species: "Human", type: "Superhuman (Ghost trains summoner)", …}
10: {id: 11, name: "Albert Einstein", status: "Dead", species: "Human", type: "", …}
11: {id: 12, name: "Alexander", status: "Dead", species: "Human", type: "", …}
12: {id: 13, name: "Alien Googah", status: "unknown", species: "Alien", type: "", …}
13: {id: 14, name: "Alien Morty", status: "unknown", species: "Alien", type: "", …}
14: {id: 15, name: "Alien Rick", status: "unknown", species: "Alien", type: "", …}
15: {id: 16, name: "Amish Cyborg", status: "Dead", species: "Alien", type: "Parasite", …}
16: {id: 17, name: "Annie", status: "Alive", species: "Human", type: "", …}
17: {id: 18, name: "Antenna Morty", status: "Alive", species: "Human", type: "Human with antennae", …}
18: {id: 19, name: "Antenna Rick", status: "unknown", species: "Human", type: "Human with antennae", …}
19: {id: 20, name: "Ants in my Eyes Johnson", status: "unknown", species: "Human", type: "Human with ants in his eyes", …}




import logo from './logo.svg';
   <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/
