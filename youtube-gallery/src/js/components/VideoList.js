var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Video = require('./Video')


var VideoList = React.createClass({
    //will render the app
    render: function(){
        {console.log('props from video list',this)}

        return (
            <div className="row">
              {
                  this.props.videos.videos.map(function(video,idx){
                    return (
                        <Video video={video} key={idx} />
                    )
                  })
              }
            </div>
        )
    }
})

module.exports = VideoList;