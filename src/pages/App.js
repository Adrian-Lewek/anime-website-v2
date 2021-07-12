import {
  BrowserRouter as Router, 
  // Switch,
  Route,
} from 'react-router-dom'
import Navbar from '../components/Navbar';
import '../style/App.scss';

const App = props => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/">
          <div>test</div>
        </Route>
      </div>
    </Router>
  );
}

export default App;
