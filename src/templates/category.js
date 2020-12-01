import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ScrollArea from "../components/ScrollArea/ScrollAreaWithCss"
import Post from "../components/Post/Post"
// import PostListing from "../components/PostListing";

export default class CategoryTemplate extends React.Component {
  render() {
    const { pageContext, data } = this.props
    const { category } = pageContext
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <div className="category-container">
          <Helmet title={`Posts in category "${category}"`} />
          {/* <PostListing postEdges={data.allMarkdownRemark.edges} /> */}
        </div>

        <ScrollArea
          className="posts"
          verticalContainerStyle={{ width: 8 }}
          verticalScrollbarStyle={{ width: 4 }}
        >
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
        </ScrollArea>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            category
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`
