import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BoardContextProvider from './contexts/Board.context';
import GameContextProvider from './contexts/Game.context';
import WelcomePage from './pages/Welcome.page';
import GamePage from './pages/Game.page';

function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
        <BoardContextProvider>
          <GameContextProvider>
            {/* <Route path="/" exact component={WelcomePage} /> */}
            <Route path="/" exact component={GamePage} />
          </GameContextProvider>
        </BoardContextProvider>
    </div>
        </Switch>
    </Router>
  );
}

export default App;
