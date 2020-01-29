/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import Header from "./header"
import Biography from "./biography";
import Skills from "./skills";
import RecentWork from "./recentWork";
import Clients from "./Clients";
import PersonnalProjects from "./PersonnalProjects";
import Projects from "./projects";
import CallToAction from "./CallToAction";
import Footer from "./footer";

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <Biography />
            <Skills />
            <RecentWork />
            <Clients />
            <PersonnalProjects />
            <Projects />
            <CallToAction   />
            <Footer />
            <main>{children}</main>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
