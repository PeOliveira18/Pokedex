import styled from "styled-components"
import Header from "./Components/header"


export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
`

function App() {

  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  )
}

export default App
