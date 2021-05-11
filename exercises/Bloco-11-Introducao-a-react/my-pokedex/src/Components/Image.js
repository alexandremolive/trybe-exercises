import './Image.css'


function Image(props) {
  return (
    <header>
      <img src={props.source} alt="logo pokemon" />
    </header>
  )
}

export default Image