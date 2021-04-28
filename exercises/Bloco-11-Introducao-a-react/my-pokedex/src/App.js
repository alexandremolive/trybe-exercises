import './App.css';
import Pokemon from './Components/Pokemon'
import PokemonsData from './data'
import Image from './Components/Image'



function App() {
  return (
    <div className="container">
      < Image source='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png'/>
      <section className='pokedex'>
        {PokemonsData.map((pokemon) =>
        (
          <div key={Math.random() * 100} className="pokemon">
            < Pokemon
              name={pokemon.name}
              type={pokemon.type}
              weight={pokemon.averageWeight.value}
              measurementUnit={pokemon.averageWeight.measurementUnit}
              image={pokemon.image}
            />
          </div>

        ))}
      </section>
    </div>
  )
}

export default App;
