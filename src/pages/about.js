import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Footer } from "../components/Footer/Footer"
import './about.scss';
import { IconButton } from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import experience from "../constants/experience"

const About = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title;

  const onClickGithub = () => {
    window.open('https://github.com/alsuehrckwl')
  }

  const onClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/jeongwoo-kim-44a8a2a6')
  }

  const onClickEmail = () => {
    window.open("mailto:alsuehrckwl@naver.com")
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <section className="about">
        <h1 className="about__title">about me</h1>

        <h3>Jeongwoo Kim. 김정우.</h3>

        <h5>Developer / Front-end</h5>

        <div className="about__description">
          <span>SAP ABAP으로 커리어를 시작하였고 풀스택 개발을 경험하고 현재는 프론트엔드에 전념하고 있습니다.</span>
          <span>Data Visualization과 Interaction Design에 관심이 많은 프론트엔드 엔지니어 입니다.</span>
        </div>

        <div className="about__link">
          <IconButton aria-label="github" onClick={onClickGithub}>
            <GitHubIcon/>
          </IconButton>
          <IconButton aria-label="linkedin"  onClick={onClickLinkedIn}>
            <LinkedInIcon/>
          </IconButton>
          <IconButton aria-label="email" onClick={onClickEmail}>
            <MailOutlineIcon/>
          </IconButton>
        </div>

        <div className="divide-line" />

        <div className="about__experience">
          
          <h2>Experience</h2>

          <ul>
            {experience.map(item => {
              return <li>
                {item.name}
              </li>
            })}
          </ul>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

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
