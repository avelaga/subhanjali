import React, { Component } from 'react'
import './navigation.module.scss';

export class Header extends Component {
  render() {
    return (
      <div className="header">
      <div className="title-div">
        <div className="title">Subhanjali</div>
        <div className="description">My Art</div>
      </div>
      <div className="nav">
      <a href="https://medium.com/@subhanjali" ><div className="link">Blog</div></a>
        <a href="mailto:subha.velaga@gmail.com"><div className="link">Contact</div></a>
        <a href="https://facebook.com" ><div className="link">Facebook</div></a>
      </div>
    </div>
    )
  }
}

export default Header
