import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Test from './pages/Test'

function App() {

  return (
    <>
      <Router>
        <Navbar />
          <Switch>
          //navbar
            <Route path='/' exact component={Home} />
            <Route path='/test' component={Test} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
