import React, { Component } from "react"
import { Link } from "gatsby"
import "./HeaderDesktop.scss"

class HeaderDesktop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
      isOpacity: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
      isOpacity: true,
    })

    setTimeout(() => {
      this.setState({
        isOpacity: false,
      })
    }, 550)
  }

  render() {
    const { menuOpen, isOpacity } = this.state
    return (
      <div className={menuOpen ? "header-desktop open" : "header-desktop"}>
        <div className="header-desktop__top">
          <div className={"hamburger"} onClick={this.toggleMenu}>
            <span className="line" />
            <span className="line" />
          </div>
          <div
            className={
              menuOpen
                ? `header-desktop__logo open ${isOpacity ? "opacity" : ""}`
                : `header-desktop__logo ${isOpacity ? "opacity" : ""}`
            }
          >
            <p>Jeongwoo Kim</p>
          </div>
        </div>
        <div className="header-desktop__bottom" />
      </div>
    )
  }
}

export default HeaderDesktop
