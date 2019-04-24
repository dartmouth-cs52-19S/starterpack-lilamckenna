import $ from 'jquery';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const About = (props) => {
  return <div> All there is to know about me </div>;
};
const Welcome = (props) => {
  return <div>Welcome</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};


let seconds = 0;

function time() {
  seconds += 1;
  $('#main').html(`${seconds} seconds have passed.`);
}

setInterval(time, 1000);


ReactDOM.render(<App />, document.getElementById('main'));
