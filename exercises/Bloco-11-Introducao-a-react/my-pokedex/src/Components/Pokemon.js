
function Pokemon(props) {
  const { name, type, weight, measurementUnit } = props
  return (
    <>
      <div className="name">{name}</div>
      <div className="type">{type}</div>
      <div className="weight">
        Peso: {weight}{measurementUnit}
      </div>
      <img className="image" src={props.image} alt='imagem do Pokemon'></img>
    </>
  )
}

export default Pokemon
