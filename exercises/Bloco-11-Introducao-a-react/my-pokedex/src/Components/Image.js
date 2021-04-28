import './Image.css'


function Image(props) {
  console.log(props)
  return (
    <header>
      <img src={props.source} alt="logo pokemon" />
    </header>
  )
}

export default Image