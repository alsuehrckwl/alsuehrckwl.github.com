import React, { Component } from "react"
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"
import './Post.scss'

class Post extends Component {
  render() {
    const { title, link, date, html, tags } = this.props

    // console.log('tags = ', tags)
    return (
        <div>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={link}>
              {title}
            </Link>
          </h3>
          <small>{date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </div>
    )
  }
}

export default Post
