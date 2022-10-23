
import ScorePage from './components/pages/score/score.component';
import NavBar from './components/molecules/navbar/navbar.component';
import {StyledOuterDiv} from './App.styles';

export default function App() {
  return (
    <StyledOuterDiv>
      <NavBar />
      <ScorePage />
    </StyledOuterDiv>
  )
}