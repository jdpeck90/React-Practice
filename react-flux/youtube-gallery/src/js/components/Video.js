var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var Video = React.createClass({
    //will render the app
    render: function(){
        console.log('from VIDEO', this.props)
        var link = "https://www.youtube.com/embed/" + this.props.video.video_id;
        console.log('link from Video.js',link)
        return (
            <div className="c4">
                <h5>{this.props.video.title}<span className="delete"><a onClick={this.onDelete.bind(this, this.props.video.id)}>Delete</a></span></h5>
                <iframe width="360" height="285" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                <p>{this.props.video.description}</p>
            </div>
        )
    },
    onDelete: function(i,j){
        console.log('onDelete',i,j)
        AppActions.removeVideo(i)
    }
})

module.exports = Video;