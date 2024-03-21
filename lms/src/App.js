import './App.css';
import Academics from './Pages/Academics';
import Attendence from './Pages/Attendence';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Exam from './Pages/Exam';
import Login from './Pages/Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/academics" component={Academics} />
        <Route path="/attendence" component={Attendence} />
        <Route path="/exam" component={Exam} />
      </Switch>
    </Router>
  );
}

export default App;