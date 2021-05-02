import React from 'react'

class TypeButtons extends React.Component {
  render (){
    const {pokemons, handleTypeBtn} = this.props
    const allButtons = pokemons.reduce((acc, pokemon) => Object.assign([...acc, pokemon]),[])
    console.log(allButtons)

    return (
      <div>
      {pokemons.map((pokemon) => 
        <button onClick={handleTypeBtn} key={Math.random() * 100} value={pokemon.type}>{pokemon.type}</button>
      )}
      </div>
    )
     
    }
  }    
export default TypeButtons

