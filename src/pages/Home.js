import React, { Component } from 'react';
import Columned from "react-columned";
import { images } from "./images.js";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MediaQuery from 'react-responsive'
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './pages.module.scss';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  mapImages(cols) {
    return <Columned columns={cols} className="gallery">
      {images.map((value, index) => {
        return <div className="img-div">
          <LazyLoadImage key={index} className="img" src={value.src} onClick={() => this.setState({ isOpen: true, photoIndex: index })} effect="opacity" />
          <div className="img-title">{value.title}</div>
          <div className="img-info">{value.description}</div>
          <div className="img-info">{value.medium}</div>
        </div>
      })}
    </Columned>
  }

  render() {
    return (
      <div className="page">
        <div className="title">Subhanjali</div>
        <div className="description">Artist in oil and acrylic mediums</div>
        <div className="email">subha.velaga@gmail.com</div>
        <MediaQuery minDeviceWidth={500}>{this.mapImages(3)}</MediaQuery>
        <MediaQuery maxDeviceWidth={500}>{this.mapImages(1)}</MediaQuery>
      </div>
    )
  }
}

export default Home