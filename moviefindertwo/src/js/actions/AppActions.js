var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../Constants/AppConstants')


var AppActions = {
    searchMovies(movie){
        console.log('test from serach movie');
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
        })
    }
}

module.exports = AppActions;