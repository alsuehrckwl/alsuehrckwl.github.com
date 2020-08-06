import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import "./blog-post.scss"
import { IconButton } from "@material-ui/core"
import { Footer } from "../components/Footer/Footer"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const category = post.frontmatter.category
      ? post.frontmatter.category[0]
          .split("")
          .map((item, idx) => (idx === 0 ? item.toUpperCase() : item))
          .join("")
      : ""

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <Link style={{ boxShadow: `none` }} to={"/"}>
          <IconButton className="back-button" aria-label="Delete">
            <svg
              id="back_svg"
              width="16px"
              height="16px"
              viewBox="0 3 32 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" fill="none">
                <path
                  d="M2.30930274,14 L9.95574934,6.35355339 L9.24864256,5.64644661 L0.646446609,14.2486426 L0.292893219,14.602196 L0.646446609,14.9557493 L9.3294716,23.6387743 L10.0365784,22.9316676 L2.10491083,15 L39,15 L39,14 L2.30930274,14 Z"
                  id="Combined-Shape"
                  fill="rgba(0, 0, 0, 0.87)"
                />
              </g>
            </svg>
          </IconButton>
        </Link>

        <div className="blog__contents">
          <div className="blog__contents--box">
            <div className="blog__contents--header">
              <p className="category">{category}</p>
              <h1 className="title">{post.frontmatter.title}</h1>
              <p className="date">{post.frontmatter.description}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <Bio />

            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
      }
    }
  }
`
