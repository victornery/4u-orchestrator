import React, { Component, createContext } from 'react'

export const initialState = {
  isLoggedIn: true,
  isLoading: false,
  isLoginError: false,
  user: {
    fullname: '',
    role: {
      type: 'authenticated'
    }
  },
  company: {},
  wallet: {},
  campaign: {
    items: []
  },
  profile: {}
}

export const ThemeContext = createContext(initialState)

class ContextProvider extends Component {
  state = {
    ...initialState,
  }

  setWallet = wallet => {
    this.setState(prevState => ({ wallet }))
  }

  setUser = user => {
    this.setState(prevState => ({ user }))
  }

  setCompany = company => {
    this.setState(prevState => ({ company }))
  }

  setCampaign = campaign => {
    this.setState(prevState => ({ ...prevState, campaign }))
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

  setProfile = profile => {
    this.setState(prevState => ({ profile: profile }))
  }

  render() {
    const { children } = this.props
    const { state } = this
    const { 
      setUser, 
      setCompany, 
      setCampaign, 
      setLoading, 
      setLoginError, 
      setLogged, 
      setWallet,
      setProfile
    } = this

    return (
      <ThemeContext.Provider
        value={{
          ...state,
          setUser,
          setCompany,
          setCampaign,
          setLoading,
          setLoginError,
          setLogged,
          setWallet,
          setProfile
        }}>
          {children}
      </ThemeContext.Provider>
    )
  }
}

export const ContextConsumer = ThemeContext.Consumer

export { ContextProvider }