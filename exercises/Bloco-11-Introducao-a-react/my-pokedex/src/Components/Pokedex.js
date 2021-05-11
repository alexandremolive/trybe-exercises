import React from 'react'
import Pokemon from './Pokemon'
import NextButton from './NextButton'
import TypeButtons from './TypeButtons'
import AllButton from './AllButton'
class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    const { pokemons } = this.props
    this.state = {
      pokemon: 0,
      type: '',
      data: pokemons
    }
  }

  handleAll = ({ target }) => {
    const { value } = target
    const { pokemons } = this.props
    this.setState({
      type: value,
      data: pokemons
    })
  }

  handleType = ({ target }) => {
    const { value } = target
    this.setState({ type: value }, () => {
      this.handleFiltered()
    })
  }

  handleFiltered = () => {
    const { type } = this.state
    const {pokemons} = this.props
    this.setState(() => ({
      data: pokemons.filter((pokemon) => pokemon.type === type)
    }))
  }

  handlePosition = () => {
    const { data } = this.state
    const positionPokemon = data.filter((pokemon) => data.indexOf(pokemon) === (this.state.pokemon))
    return positionPokemon

  }

  handleNextBtn = () => {
    const { data } = this.state
    this.setState((prevState) => ({
      pokemon: prevState.pokemon + 1 !== data.length ? prevState.pokemon + 1 : 0
    }))
  }



  render() {
    const { pokemons } = this.props
    return (
      <>
        <>
          {this.handlePosition().map((pokemon) => < Pokemon key={pokemon.name} pokemon={pokemon} />)}
        </>
        <div className="buttons">
          <div className="main-buttons">
            <NextButton handleNextBtn={this.handleNextBtn} />
            <AllButton handleAll={this.handleAll} />
          </div>
          <TypeButtons handleType={this.handleType} pokemons={pokemons} />
        </div>
      </>
    )
  }
}

export default Pokedex