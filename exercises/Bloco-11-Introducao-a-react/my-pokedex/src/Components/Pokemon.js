import PropTypes from 'prop-types';

function Pokemon(props) {
  const { name, type, weight, measurementUnit, image } = props
  return (
    <>
      <div className="name">{name}</div>
      <div className="type">{type}</div>
      <div className="weight">
        Peso: {weight}{measurementUnit}
      </div>
      <img className="image" src={image} alt='imagem do Pokemon'></img>
    </>
  )
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Pokemon
