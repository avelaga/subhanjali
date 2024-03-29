import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import HamburgerMenu from 'react-hamburger-menu';
import facebook from "../../dist/logos/facebook.png";
import instagram from "../../dist/logos/instagram.png";
import gmail from "../../dist/logos/gmail.png";
import linkedin from "../../dist/logos/linkedin.png";
import medium from "../../dist/logos/medium.png";
import youtube from "../../dist/logos/youtube.png";
import './navigation.module.css';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  handleClick() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="header">

        {/* mobile  */}
        < MediaQuery maxDeviceWidth={500} >
          <div className="menu-button">
            <HamburgerMenu
              isOpen={!this.state.collapsed}
              menuClicked={this.handleClick.bind(this)}
              width={25}
              height={25}
              strokeWidth={4}
              rotate={0}
              color='white'
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>

          <div
            className={this.state.collapsed ? "none nav" : "nav"} >
            {/* <a href="https://medium.com/@subhanjali" target="_blank"><img src={medium} className="link logo" /></a>
            <a href="https://www.facebook.com/subhanjali" target="_blank"><img src={facebook} className="link logo" /></a> */}
            <a href="https://www.instagram.com/artbysubhanjali/" target="_blank"><img src={instagram} className="link logo" /></a>
            {/* <a href="https://www.youtube.com/channel/UCT-a1ua-2qPMZG8wJtP5Btg" target="_blank"><img src={youtube} className="link logo" /></a>
            <a href="https://www.linkedin.com/in/subhavelaga/" target="_blank"><img src={linkedin} className="link logo" /></a> */}
            <a href="mailto:subha.velaga@gmail.com"><img src={gmail} className="link logo" /></a>
          </div>
        </ MediaQuery>

        <div className="title-div">
          <div className="title">Subhanjali</div>
          <div className="description">artist in oil and acrylic mediums</div>
         </div>

        {/* desktop  */}
        < MediaQuery minDeviceWidth={500} >
          <div className="nav">
          {/* <a href="https://medium.com/@subhanjali" target="_blank"><img src={medium} className="link logo" /></a>
            <a href="https://www.facebook.com/subhanjali" target="_blank"><img src={facebook} className="link logo" /></a> */}
            <a href="https://www.instagram.com/artbysubhanjali/" target="_blank"><img src={instagram} className="link logo" /></a>
            {/* <a href="https://www.youtube.com/channel/UCT-a1ua-2qPMZG8wJtP5Btg" target="_blank"><img src={youtube} className="link logo" /></a>
            <a href="https://www.linkedin.com/in/subhavelaga/" target="_blank"><img src={linkedin} className="link logo" /></a> */}
            <a href="mailto:subha.velaga@gmail.com"><img src={gmail} className="link logo" /></a>
          </div>
        </ MediaQuery>
      </div>
    )
  }
}

export default Header
