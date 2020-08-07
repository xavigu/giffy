import React from 'react'
import useUser from 'hooks/useUser'
import {useLocation} from 'wouter'
import './Fav.css'

export default function Fav({id}) {
  const { isLogged, favs, addFav } = useUser();
  const [, navigate] = useLocation();
  const isFaved = favs.some(favId => favId === id);

  const handleClick = () => {
    // if (!isLogged) return navigate('/login');
    console.log(id);
    addFav({id});
  }

  const [label, emoji] = isFaved ? ['Remove Gif favorites', '❌'] : ['Add Gif favorites', '❤️']

  return (
        <button className='fav-button' onClick={handleClick}>
          <span aria-label={label} role='img'>{emoji}</span>
        </button>
  )
}
