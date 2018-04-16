var App = require('./components/App.js');
var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/AppAPI.js');

console.log('test from main.js')


ReactDOM.render(<App />, 
    document.getElementById('app'));
