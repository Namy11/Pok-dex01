import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
 
 return (
   <div>
    <PokemonCard pokemon={pokemonList[0]}/>
   </div>
  )
}

const pokemonList = [
  {
    name: "balbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


export default App
