var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore') 
var SearchForm = require('../components/SearchForm.js')

class App extends React.Components {
    render(){
        return(
            <div>
                <SearchForm />
            </div>
        )
    }

}
export default App;
  