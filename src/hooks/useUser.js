import {useCallback, useContext, useState} from 'react'
import Context from 'context/UserContext'
import loginService from 'services/login'
import addFavService from 'services/addFav'

export default function useUser () {
  const {jwt, favs, setJWT, setFavs} = useContext(Context);
  const [state, setState]= useState({loading: false, error: false});

  const login = useCallback(({username, password}) => {
    setState({loading: true, error: false});
    loginService({username, password})
      .then( jwt => {
        window.sessionStorage.setItem('jwt', jwt);
        setState({loading: false, error: false});
        setJWT(jwt);
      })
      .catch( err => {
        window.sessionStorage.removeItem('jwt');
        console.log(err);
        setState({loading: false, error: true});
      })
  }, [setJWT])

  const addFav = useCallback(({id}) => {
    addFavService({id, jwt})
      // es igual a escribir .then(favs => setFavs(favs))
      .then(setFavs)
      .catch(err => {
        console.log(err);
      })
  }, [])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt');
    setJWT(null)
  }, [setJWT])

  return {
    favs,
    addFav,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  }
}