// import PropTypes from 'prop-types';

function Pokemon({ pokemon }) {
  const { name, type, averageWeight, image } = pokemon
  const { value, measurementUnit } = averageWeight
  return (
    <div className="pokemon">
      <div className="name">Name: {name}</div>
      <div className="type">Type: {type}</div>
      <div className="weight">
        Peso: {value}{measurementUnit}
      </div>
      <img className="image" src={image} alt='imagem do Pokemon'></img>
    </div>
  )
}

// Pokemon.propTypes = {
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   weight: PropTypes.number.isRequired,
//   measurementUnit: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired
// }

export default Pokemon
