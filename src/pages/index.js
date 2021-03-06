import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post/Post"

import "../assets/styles/index.scss"
import { Footer } from "../components/Footer/Footer"

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <ul>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            return (
              <Post
                key={node.fields.slug}
                title={title}
                link={node.fields.slug}
                date={node.frontmatter.date}
                html={node.frontmatter.description || node.excerpt}
                tags={node.frontmatter.tags}
              />
            )
          })}
        </ul>
        <Footer />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
