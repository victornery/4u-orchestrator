import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { LoginHolder, StyledInput } from './styles'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { ThemeContext } from '@context'
import { API_BASE } from '@utils/requests'
import CircularProgress from '@material-ui/core/CircularProgress';
import { initializeUser } from '@context/actions'

const LoginSchema = Yup.object().shape({
  user: Yup.string()
  .email('E-mail inválido')
  .min(3, 'Usuário muito curto')
  .required('Obrigatório'),
  password: Yup.string()
  .min(3, 'Senha muito curta')
  .required('Obrigatório')
})

const Login = () => {
  const context = useContext(ThemeContext)
  const history = useHistory();
  
  const SUBMIT_LOGIN_USER = params => {
    
    context.setLoading(true);

    return API_BASE.post('/auth/local', params)
    .then(({ data }) => {
      initializeUser(context, history, data)
    })
    .catch(({ error }) => {
      context.setLoading(false);
      context.setLoginError(true)
      setTimeout(() => {
        context.setLoginError(false)
      }, 2000)
    })
  }

  return (
    <LoginHolder>
      <Formik
      initialValues={{
        user: '',
        password: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={({ user, password }) => {

        return SUBMIT_LOGIN_USER({ identifier: user, password })
        
      }}
      >
        {
          ({ errors, touched, isValidating, values, handleChange, handleBlur }) => (
            <Form>
              <StyledInput
              onChange={handleChange}
              onBlur={handleBlur}
              error={(errors.user && touched.user) && true}
              helperText={(errors.user && touched.user) && errors.user}
              name="user"
              id="user"
              value={values.user}
              type="text"
              label="E-mail" />

              <StyledInput
              onChange={handleChange}
              onBlur={handleBlur}
              error={(errors.password && touched.password) && true}
              helperText={(errors.password && touched.password) && errors.password}
              value={values.password}
              name="password"
              id="password"
              type="password"
              label="Senha" />
              <Button
                variant="contained"
                type="submit"
                disabled={(errors.password || errors.user || !values.user || !values.password || context.isLoading) && true}
                size="large"
                color="primary"
          >{ context.isLoading ? <CircularProgress color="#FFF" size={25} /> : 'Entrar' }</Button>
            </Form>
          )
        }
      </Formik>
    </LoginHolder>
  )
}

export default Login