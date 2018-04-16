var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../store/AppStore');
var SearchForm = require('./SearchForm.js')

function getAppState() {
    return {
        movies: AppStore.getMoviesResults()
    }
}

class App extends React.Component {
   
    getInitialState() {
        return getAppState();
    }
  componentDidMount() {
    AppStore.addChangeListener(this._onChange);

  }
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);

  }
  render() {
    return (
      <div className="App">
        <SearchForm />
      </div>
    );
  }

  _onChange() {
    this.setState(getAppState())
  }
}

export default App;
