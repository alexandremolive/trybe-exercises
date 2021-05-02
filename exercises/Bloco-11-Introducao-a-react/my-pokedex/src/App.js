import './App.css';
import Pokedex from './Components/Pokedex'
import Image from './Components/Image'

function App() {
  return (
    <div className="container">
      < Image source='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png' />
      <section className='pokedex'>
        < Pokedex />

      </section>
    </div>
  )
}

export default App;
