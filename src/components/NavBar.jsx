function NavBar (props){
const {pokemonList,handlePokemonSelection } = props;

const NavButton = (pokemon) => {
    handlePokemonSelection(pokemon)
}




return (
    <div>
      <h1>Liste des Pokémons</h1>
     
        {pokemonList.map((pokemon,index) => (
         <button key={index} onClick={() => NavButton(pokemon)}>{pokemon.name}</button>
     ))}
    </div>
  );
}

export default NavBar;