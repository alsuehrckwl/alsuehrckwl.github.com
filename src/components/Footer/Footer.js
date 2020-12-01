import React from "react"
import "./Footer.scss"

export const Footer = () => (
  <footer>
    <div className="left">
      <h4>Jeongwoo Kim.</h4>
      <a href="mailto:alsuehrckwl@naver.com">alsuehrckwl@naver.com</a>
    </div>
    <div className="right">
      <p>
        © Jeongwoo Kim {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </div>
  </footer>
)

export default Footer
