import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BoardContextProvider from './contexts/Board.context';
import GameContextProvider from './contexts/Game.context';
import WelcomePage from './pages/Welcome.page';
import GamePage from './pages/Game.page';
import { GlobalStyle } from './styles/GlobalStyles.styles';

function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
        <GlobalStyle/>
        <BoardContextProvider>
          <GameContextProvider>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/game" exact component={GamePage} />
          </GameContextProvider>
        </BoardContextProvider>
    </div>
        </Switch>
    </Router>
  );
}

export default App;
