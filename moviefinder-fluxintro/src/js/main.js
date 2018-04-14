var App = reqiure('./components/App');
var React = reqiure('react');
var ReactDom = reqiure('react-dom');
var AppAPI = reqiure('./utils/AppApi.js');

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);