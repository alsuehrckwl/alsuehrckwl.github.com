import React, { Component } from "react"
import { graphql } from "gatsby"
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
            <Link style={{ boxShadow: `none` }} to={"/"}>
              <p>Jeongwoo Kim</p>
            </Link>
          </div>
        </div>
        <div
          className={
            menuOpen ? `header-desktop__menu open` : "header-desktop__menu"
          }
        >
          <Link style={{ boxShadow: `none` }} to={"/category/javascript"}>
            javascript
          </Link>
          <Link style={{ boxShadow: `none` }} to={"/category/etc"}>
            etc
          </Link>
        </div>
        <div className="header-desktop__bottom" />
      </div>
    )
  }
}

export default HeaderDesktop

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            category
          }
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
