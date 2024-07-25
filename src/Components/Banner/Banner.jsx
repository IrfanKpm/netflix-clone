import React, { useEffect,useState } from 'react'
import axios from './../../axios'
import './Banner.css'
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
  const [movie,setMovie] = useState()
  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce)=>{
          let n = Math.floor(Math.random() * 20);
          console.log(responce.data.results[n])
          setMovie(responce.data.results[n]);
      })
  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}>
       <div className="content">
         <h1 className="title">{movie?movie.title || movie.name:''}</h1>
         <div className="banner-btns">
            <button className="btn">Play</button>
            <button className="btn">My list</button>
         </div>
         <h1 className="description">{movie?movie.overview:""}</h1>
       </div>
       <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner
