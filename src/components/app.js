import '../style.scss';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import React from 'react';
import Controls from '../containers/controls';
import Counter from '../containers/counter';

const About = (props) => {
  return <div> All there is to know about me </div>;
};
const Welcome = (props) => {
  return (
    <div>Welcome
      <Controls />
      <Counter />
    </div>
  );
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact> Home</NavLink> </li>
        <li><NavLink to="/about" exact> About</NavLink> </li>
        <li><NavLink to="/test/id1" exact> Home</NavLink> </li>
        <li><NavLink to="/test/id2" exact> Home</NavLink> </li>
      </ul>
    </nav>
  );
};
const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
