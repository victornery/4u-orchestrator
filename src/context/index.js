import React, { Component, createContext } from 'react'

export const initialState = {
  isLoggedIn: false,
  isLoading: false,
  isLoginError: false,
  user: {
    fullname: ''
  },
  company: {},
  credits: {},
  campaign: {},
}

export const ThemeContext = createContext(initialState)

class ContextProvider extends Component {
  state = {
    ...initialState,
  }

  setUser = user => {
    this.setState(prevState => ({ user }))
  }

  setCompany = company => {
    this.setState(prevState => ({ company }))
  }

  setCampaign = campaign => {
    this.setState(prevState => ({ campaign }))
  }

  setLoading = loading => {
    this.setState(prevState => ({ isLoading: loading }))
  }

  setLogged = state => {
    this.setState(prevState => ({ isLoggedIn: state }))
  }

  setLoginError = login => {
    this.setState(prevState => ({ isLoginError: login }))
  }

  render() {
    const { children } = this.props
    const { state } = this
    const { setUser, setCompany, setCampaign, setLoading, setLoginError, setLogged } = this

    return (
      <ThemeContext.Provider
        value={{
          ...state,
          setUser,
          setCompany,
          setCampaign,
          setLoading,
          setLoginError,
          setLogged
        }}>
          {children}
      </ThemeContext.Provider>
    )
  }
}

export const ContextConsumer = ThemeContext.Consumer

export { ContextProvider }