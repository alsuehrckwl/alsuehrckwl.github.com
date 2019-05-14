import React, { Component } from "react"

const Ctxt = React.createContext({
  isDrawerOpen: false,
  toggleDrawer: () => {},
})

export const DrawerContextConsumer = Ctxt.Consumer

export class DrawerContext extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDrawerOpen: false,
    }

    this.toggleDrawerEvent = this.toggleDrawerEvent.bind(this)
  }

  toggleDrawerEvent() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen,
    })
  }

  render() {
    const { isDrawerOpen } = this.state
    const { children } = this.props
    return (
      <Ctxt.Provider
        value={{
          isDrawerOpen: isDrawerOpen,
          toggleDrawer: this.toggleDrawerEvent,
        }}
      >
        {children}
      </Ctxt.Provider>
    )
  }
}
