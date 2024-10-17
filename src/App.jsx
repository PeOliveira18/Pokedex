import styled from "styled-components"
import Header from "./Components/header"
import { useState } from "react";


export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
`

function App() {

  const [texto, setTexto] = useState([])

  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((data) => data.json())
  .then((json) => setTexto(json));


  return (
    <AppContainer>
      <Header/>
      <p>{texto.name}</p>
      <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'} alt="" />
    </AppContainer>
  )
}

export default App
