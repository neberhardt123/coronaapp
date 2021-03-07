import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Graphs from './pages/Graphs'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/graphs' component={Graphs} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
