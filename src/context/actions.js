import { API_BASE } from '@utils/requests'

export const logoffUser = async (context, history) => {
  context.setLoading(true);
  localStorage.removeItem('jwt')
  context.setLogged(false);
  history.push('/')
  context.setLoading(false);
}

export const initializeWallet = (context, history, data) => {
  console.log(data)

  API_BASE.get(`/wallets?companyUID=${data.companyUID ? data.companyUID : data.user.companyUID}`)
  .then(({ data }) => {
    context.setWallet(data);
  })

  console.log(context);
}

export const initializeUser = async (context, history, data) => {
  data.jwt ? localStorage.setItem('jwt', data.jwt) : ''
  context.setLoading(false);
  context.setLogged(true);
  initializeWallet(context, history, data);
  context.setUser(data.user ? data.user : data);
  history.push('/me');
}