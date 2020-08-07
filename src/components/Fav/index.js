import React from 'react'
import useUser from 'hooks/useUser'
import {useLocation} from 'wouter'
import './Fav.css'

export default function Fav({id}) {
  const { isLogged, fav } = useUser();
  const [, navigate] = useLocation();

  const handleClick = () => {
    // if (!isLogged) return navigate('/login');
    console.log({id})
    fav(id);
  }
  return (
    <button className='fav-button' onClick={handleClick}>
      <span aria-label='Fav Gif' role='img'>❤️</span>
    </button>
  )
}
