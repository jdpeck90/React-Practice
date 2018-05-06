var AppActions = require('../actions/AppActions.js');
var $ = require('jquery');

module.exports = {
    searchText: function (search) {
        console.log('search from API' + search.text)

        var url = 'http://duckduckgo.com/?q=' + search.text + '&format=json&pretty=1'
        $.ajax({
            url: url,
            dataType: "jsonp",
            cache: false,
            success: function(data){
                console.log(data.RelatedTopics)
                AppActions.receiveResults(data.RelatedTopics);
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }.bind(this)
        })
    }
}