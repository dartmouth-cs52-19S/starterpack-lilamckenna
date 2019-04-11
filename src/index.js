import $ from 'jquery';
import './style.scss';

let seconds = 0;

function time() {
  seconds += 1;
  $('#main').html(`${seconds} seconds have passed.`);
}

setInterval(time, 1000);
