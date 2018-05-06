var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Result = require('./Result')


var SearchResults = React.createClass({
  
    //will render the app
    render: function(){
        if(this.props.searchText != '') {
            var results =  <h2 className="page-header">Results for {this.props.searchText}</h2>
        } else {
            var results = '';
        }
        return (
            <div>
                {results}
                {console.log('from SearchResults',this.props)}
                {
                    this.props.results.map(function(result, idx){
                      return (
                          <Result result={result} key={idx} />
                      )
                    })
                }
            </div>
        )
    },
    //will change render to new state
  
})

module.exports = SearchResults;