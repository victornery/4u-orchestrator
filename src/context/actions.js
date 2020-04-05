import { API_BASE } from '@utils/requests'
import React, { useContext } from 'react'
import { ThemeContext } from '@context'

export const SUBMIT_LOGIN_USER = params => {
  
  const context = useContext(ThemeContext);
  API_BASE('/auth/local', params)
  .then(({ data }) => {
    console.log(context);
    console.log(data)
  })

  console.log('teste');
  return <div />
}