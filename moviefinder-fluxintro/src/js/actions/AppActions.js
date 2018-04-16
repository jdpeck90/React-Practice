var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');


var AppActions = {
    searchMovie(movie){
        console.log("hi from searchMovie", movie)
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
        })
    },

    receiveMovieResults(movie) {
        console.log(movie)
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_MOVIE_RESULTS,
            movie: movie
    })

}

}
module.exports = AppActions;