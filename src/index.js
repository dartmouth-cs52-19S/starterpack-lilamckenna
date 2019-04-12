import $ from 'jquery';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div className="test">All the REACT are belong to us!</div>;
ReactDOM.render(<App />, document.getElementById('main'));

let seconds = 0;

function time() {
  seconds += 1;
  $('#main').html(`${seconds} seconds have passed.`);
}

setInterval(time, 1000);
