import styled from "styled-components";
import Home from "./Components/pages/home";
import ErrorBoundary from "./Components/Error/errorBondary";

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
`;

function App() {
  return (
      <Home/>
  )
  
}

export default App;
