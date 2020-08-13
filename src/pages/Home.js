import React, { Component } from 'react';
import Columned from "react-columned";
import { images, getHeight, getWidth } from "./images.js";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
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
        return <div className="img-div" key={index}>
          <LazyLoadImage className="img" src={value.src} onClick={() => this.setState({ isOpen: true, photoIndex: index })} effect="opacity"
            height={getHeight(value.src)} width={getWidth(value.src)}
          />
          <div className="img-title">{value.title}</div>
          <div className="img-info">{value.description}</div>
          <div className="img-info">{value.medium}</div>
        </div>
      })}
    </Columned>
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="page">

        <div className="header">
          <div className="title-div">
            <div className="title">Subhanjali</div>
            <div className="description">Artist in oil and acrylic mediums</div>
          </div>

          <div className="nav">
          <a href="https://medium.com/@subhanjali" ><div className="link">Blog</div></a>
            <a href="mailto:subha.velaga@gmail.com"><div className="link">Contact</div></a>
            <a href="https://facebook.com" ><div className="link">Facebook</div></a>
          </div>
        </div>


        <MediaQuery minDeviceWidth={500}>{this.mapImages(3)}</MediaQuery>
        <MediaQuery maxDeviceWidth={500}>{this.mapImages(1)}</MediaQuery>
        <a href="https://abhi.work" target="_blank"><div className="credit">Developed by Abhi Velaga</div></a>

        {/* lightbox that conditionally appears when the variable, isOpen, is true */}
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    )
  }
}

export default Home