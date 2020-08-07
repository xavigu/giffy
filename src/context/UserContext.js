import React, {useState} from 'react'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
  // add the return of an arrow function like the initial state
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'));
  const [favs, setFavs] = useState([]);

  return <Context.Provider value={{jwt, favs, setJWT, setFavs}}>
    {children}
  </Context.Provider>
}

export default Context