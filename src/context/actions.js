import { API_BASE } from '@utils/requests'

export const logoffUser = async (context, history) => {
  context.setLoading(true);
  localStorage.removeItem('jwt')
  context.setLogged(false);
  history.push('/')
  context.setLoading(false);
}

export const initializeWallet = (context, history, data) => {

  API_BASE.get(`/wallets?companyUID=${data.companyUID ? data.companyUID : data.user.companyUID}`)
  .then(({ data }) => {
    context.setWallet(data);
  })

}

export const initializeUser = async (context, history, data) => {
  await data.jwt ? localStorage.setItem('jwt', data.jwt) : ''
  await context.setLoading(false);
  await context.setLogged(true);
  await initializeWallet(context, history, data);
  await context.setUser(data.user ? data.user : data);
  await history.push('/me');
}