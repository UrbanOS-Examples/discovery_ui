import './header.scss'
import React from 'react'
import urbanosLogo from '../../assets/urbanos-logo.png';

const Header = () => {
  const navBar = () => {
    return (
      <div
        className={"nav-wrapper pinned"}
      >
        <div className={"logo"}>
          <a href={`${window.BASE_URL}`}>
            <img src={urbanosLogo}></img>
          </a>
        </div>
        <div className="nav-element-container">
          <a
            className="nav-element blue"
            href={"/"}
          >
            EXPLORE DATA
          </a>
          <a className="nav-element" href="/">
            ABOUT URBAN OS
          </a>
        </div>
      </div>
    )
  }

  return (
      <header>
        <div className="wrapper">
          {navBar()}
        </div>
      </header>
  )
}
export default Header
