var AppActions = require('../actions/AppActions.js');
var $ = require('jquery');

module.exports = {
    searchMovies: function(movie){
        $.ajax({
            url: "http://www.omdbapi.com/?s=" + movie.title + '&apikey=9dea17da',
            dataType: 'json',
            cache: false,
            success: function(data){
                AppActions.receiveMovieResults(data.Search)
            }.bind(this),
            error: function(xhr, status, err){
                alert(err);
            }.bind(this)
        })
    }
}