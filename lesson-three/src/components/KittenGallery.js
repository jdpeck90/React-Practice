const CLIENT_ID = 'f94e76572eaeb8f13a25';
const CLIENT_SECRET = 'c4dc4846c5401744e331b8ffffb3a7913fda7e89';
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
          {console.log(response,'response')};
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
