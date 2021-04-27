import './App.css';
import Pokemon from './Components/Pokemon'
import PokemonsData from './data'

function App() {
  return PokemonsData.map((pokeData, index) =>
  (
    <div className='pokemon' key={index}>
      <Pokemon
        key={index}
        name={pokeData.name}
        type={pokeData.type}
        weight={pokeData.averageWeight.value}
        measurementUnit={pokeData.averageWeight.measurementUnit}
        image={pokeData.image}
      />
    </div>
  ))
}

export default App;
