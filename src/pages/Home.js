import React, { Component } from 'react';
import Columned from "react-columned";
import testImg from "../../dist/images/test.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './pages.module.scss';



export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      images: [
        testImg, testImg, testImg, testImg, testImg, testImg
      ]
    };
  }

  render() {
    return (
      <div className="page">
        <div className="title">Subhanjali Velaga</div>
        <div className="description">This is information about me and what I do</div>
        <Columned columns={3} className="gallery">
          {this.state.images.map((value, index) => {
            return <LazyLoadImage key={index} className="img" src={value} onClick={() => this.setState({ isOpen: true, photoIndex: index })} effect="opacity" />
          })}
        </Columned>
      </div>
    )
  }
}

export default Home
