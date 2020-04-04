import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { LoginHolder, StyledInput } from './styles'
import { Button } from '@material-ui/core'

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
  return (
    <LoginHolder>
      <Formik
      initialValues={{
        user: '',
        password: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        console.log(values)
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
              type="text" label="Usuário, E-mail ou Telefone" />
              <StyledInput
              onChange={handleChange}
              onBlur={handleBlur}
              error={(errors.password && touched.password) && true}
              helperText={(errors.password && touched.password) && errors.password}
              name="password"
              id="password"
              type="password" label="Senha" />
              <Button variant="contained" type="submit" onClick={() => console.log('teste')} size="large" color="primary">Entrar</Button>
            </Form>
          )
        }
      </Formik>
    </LoginHolder>
  )
}

export default Login