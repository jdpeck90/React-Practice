import React, { Component } from 'react';

class ShutterStockGallery extends Component {
    render () {
        var images = this.props.images.map(function (image) {
            return <li key={image.id}><img src={image.url} alt={image.alt} /></li>;
        });
        return (
          <ul className="image-gallery">
          {images}
          </ul>
        );
    }
}

ShutterStockGallery.propTypes = {
    images: React.PropTypes.array.isRequired
};

export default ShutterStockGallery;
