import React, { Component } from "react"
import { Link } from "gatsby"
import Chip from "@material-ui/core/Chip"
import "./Post.scss"

class Post extends Component {
  render() {
    const { title, link, date, html, tags } = this.props

    return (
      <li className="post">
        <small>{date}</small>
        <Link style={{ boxShadow: `none` }} to={link}>
          {title}
        </Link>
        <p
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
        <div className="post__tags">
          {tags
            ? tags.map((item, idx) => {
                return (
                  <Chip
                    key={`tag-${idx}`}
                    label={item}
                    className=""
                    variant="outlined"
                  />
                )
              })
            : null}
        </div>
      </li>
    )
  }
}

export default Post
