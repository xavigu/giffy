import React from 'react'
import {Link} from 'wouter'
import Fav from 'components/Fav'
import './Gif.css'

// eslint-disable-next-line react/prop-types
export default function Gif ({ title, id, url }) {
  return (
    <div className="Gif">
      <div className="Gif-buttons">
        <Fav id={id} url={url}></Fav>
      </div>
      <Link to={`/gif/${id}`} className='Gif-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>

  )
}