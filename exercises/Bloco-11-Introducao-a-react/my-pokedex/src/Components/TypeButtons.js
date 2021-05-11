import React from 'react'
class TypeButtons extends React.Component {
  render (){
    const {pokemons, handleType} = this.props
    const allPokemons = pokemons.reduce((acc, pokemon) =>  [...acc, pokemon.type], [])
    const pokemonsByType = allPokemons.filter((pokemon, index) => allPokemons.indexOf(pokemon) === index)
    return (
      <div>
      {pokemonsByType.map((pokemon) => 
        <button onClick={handleType} key={pokemon} value={pokemon}>{pokemon}</button>
      )}
      </div>
    )
    }
  }    
export default TypeButtons

