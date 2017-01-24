const CLIENT_ID =
const CLIENT_SECRET =
var AUTH = btoa(CLIENT_ID + ':' + CLIENT_SECRET);
import axios from 'axios';
import ShutterStockGallery from './ShutterStockGallery';

import React, { Component } from 'react';

class KittenGallery extends Component {
    constructor () {
        super();
        this.state = {
            images: []
        };
    }

    componentDidMount () {
      console.log(CLIENT_ID);
      console.log(CLIENT_SECRET);
        axios.get("https://api.shutterstock.com/v2/images/search", {
            params: {
                query: 'kitten'
            },
            headers: {
                Authorization: 'Basic ' + AUTH
            }
        }).then(function (response) {
            var images = response.data.data.map(function (image) {
                return {
                    url: image.assets.preview.url,
                    id: image.id,
                    alt: image.description
                };
            });
            this.setState({
                images: images
            });
        }.bind(this));
    }
    render () {
        return <ShutterStockGallery images={this.state.images} />;
    }
  }
export default KittenGallery;
