import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Footer } from "../components/Footer/Footer"

const About = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <div>
        <h1>about me</h1>

        <p>Jeongwoo Kim. 김정우.</p>

        <h3>DEVELOPER / front-end</h3>
      </div>
      <Footer />
    </Layout>
  )
}

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { data } = this.props
//     const siteTitle = data.site.siteMetadata.title

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO
//           title="About"
//           keywords={[`blog`, `gatsby`, `javascript`, `react`]}
//         />

//         <div>
//           <h1>about me</h1>

//           <p>Jeongwoo Kim. 김정우.</p>

//           <h3>DEVELOPER / front-end</h3>

//         </div>
//         <Footer />
//       </Layout>
//     )
//   }
// }

export default About

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
