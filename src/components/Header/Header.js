import React, { Component, Fragment } from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import "./Header.scss"
import {
  DrawerContextConsumer,
  DrawerContext,
} from "../../contextApi/DrawerContext"
import { Drawer } from "@material-ui/core";

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AppBar position="sticky" color="default" className="header">
        <Toolbar>
          <DrawerContext>
            <DrawerContextConsumer>
              {({ isDrawerOpen, toggleDrawer }) => (
                <Fragment>
                  <div
                    className={isDrawerOpen ? "hamburger active" : "hamburger"}
                    onClick={toggleDrawer}
                  >
                    <span className="line" />
                    <span className="line" />
                  </div>
                  <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
                    <div tabIndex={0} role="button" onClick={toggleDrawer}>
                      <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                      </ul>
                    </div>
                  </Drawer>
                </Fragment>
              )}
            </DrawerContextConsumer>
          </DrawerContext>
          <div className="header__logo">
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              <p>Jeongwoo Kim</p>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
