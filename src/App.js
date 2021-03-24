import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import BoardContextProvider from './contexts/Board.context';
import GameContextProvider from './contexts/Game.context';
import WelcomePage from './pages/Welcome.page';
import GamePage from './pages/Game.page';
import { GlobalStyle } from './styles/GlobalStyles.styles';

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
        <GlobalStyle/>
        <BoardContextProvider>
          <GameContextProvider>
            <MainWrapper>
              <Route path="/" exact component={WelcomePage} />
              <Route path="/game" exact component={GamePage} />
            </MainWrapper>
          </GameContextProvider>
        </BoardContextProvider>
    </div>
        </Switch>
    </Router>
  );
}

export default App;
