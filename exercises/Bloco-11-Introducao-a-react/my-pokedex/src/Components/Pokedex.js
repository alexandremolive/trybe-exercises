import React from 'react'
import pokemons from '../data'
import Pokemon from './Pokemon'
import NextButton from './NextButton'
import TypeButtons from './TypeButtons'
import AllButton from './AllButton'
class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: 0,
      type: '',
    }
  }

  handleAll = ({ target }) => {
    const { value } = target
    this.setState({
      type: value
    })
  }

  handleType = () => {
    if (this.state.type !== '') {
      const typePokemon = pokemons.filter((pokemon) => pokemon.type === (this.state.type))
      return typePokemon
    } return pokemons

  }
  handlePosition = () => {
    const positionPokemon = this.handleType().filter((pokemon) => this.handleType().indexOf(pokemon) === (this.state.pokemon))
    return positionPokemon
  }
  handleNextBtn = () => {
    this.setState((prevState) => ({
      pokemon: prevState.pokemon + 1 !== this.handleType().length ? prevState.pokemon + 1 : 0
    }))
  }
  handleTypeBtn = ({ target }) => {
    const { value } = target;
    this.setState({
      type: value
    })

  }
  render() {
    return (
      <>
        <>
          {this.handlePosition().map((pokemon) => < Pokemon key={Math.random() * 100} pokemon={pokemon} />)}
        </>
        <div className="buttons">
          <div className="main-buttons">
            <NextButton handleNextBtn={this.handleNextBtn} />
            <AllButton handleAll={this.handleAll} />
          </div>
          <TypeButtons handleTypeBtn={this.handleTypeBtn} pokemons={pokemons} />
        </div>
      </>
    )
  }
}

export default Pokedex