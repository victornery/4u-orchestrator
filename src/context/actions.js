import { API_BASE } from '@utils/requests'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ThemeContext } from '@context'

export const useLogoff = async () => {
  const history = useHistory();
  const { setLogged, setLoading } = useContext(ThemeContext)

  setLogged(false);
  setLoading(true);
  localStorage.removeItem('jwt')
  await history.push('/')
  await setLoading(false);
}