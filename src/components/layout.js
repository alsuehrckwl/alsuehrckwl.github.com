import React from "react"

import { rhythm } from "../utils/typography"
import HeaderMobile from "./Header/Mobile/HeaderMobile"
import withWidth, { isWidthUp } from "@material-ui/core/withWidth"
import HeaderDesktop from "./Header/Desktop/HeaderDesktop"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <>
        {isWidthUp("sm", this.props.width) ? (
          <HeaderDesktop />
        ) : (
          <HeaderMobile />
        )}
        <div className="contents">
          {children}
        </div>
      </>
    )
  }
}

export default withWidth()(Layout)
