import { useState } from 'react';
import React from 'react'
import AddModel from "./AddModel";
import ListMovies from "./ListMovies";
import SearchMovie from "./SearchMovie";
import {  Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "../App.css";



const movies=[
    {
   id:uuidv4(),
   name:'The Hunger Games',
   posterUrl:'https://images-na.ssl-images-amazon.com/images/I/71Vu2hpNfPL._AC_SL1008_.jpg',
   rating:'5',
   description:'Katniss Everdeen voluntarily takes her younger sister place in the Hunger Games: a televised competition in which two teenagers from each.',
   trailer: "mfmrPu43DF8"
 },
 {
   id: uuidv4(),
   name:'Yamakasi gang',
   posterUrl:'https://m.media-amazon.com/images/M/MV5BZThjZTFlMmQtOTg5Ni00Yjc3LWE2N2UtMDQ2YTA4MTQ1Y2I0XkEyXkFqcGdeQXVyMzI2ODkyNDg@._V1_.jpg',
   rating:'3',
   description:'7 guys from Paris suburbs like challenges like climbing tall buildings and doing parkour - especially with cops/flics chasing them. When a kid fan .',
   trailer: "rN0GpdaUEXg"
   
 
 },
 {
   id: uuidv4(),
   name:'Titanic',
   posterUrl:'https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png',
   rating:'4',
   description:'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
   trailer: "kVrqfYjkTdQ"
 }
 
 ];


 export  class User extends React.Component {
  render() {
      const [movie] = movies.filter(el => el.id == this.props.match.params.id)

      return (
          <div>
              <h1> Page Description</h1>
          <h3>{movie.description}</h3>
          <div>
          <iframe src={"https://www.youtube.com/embed/" + movie.trailer} width="560" height="315"></iframe>
          </div>

          <div className="go-back">
              <Link to={"/"}> Go Back </Link>
          </div>
          </div>
      )
  }
}


export default function CardContainer() {
    const [rate, setRate]= useState(0);
  const [searchTitle, setSearchTitle] = useState('')
  const searchHandler = (searchedTitle) => setSearchTitle(searchedTitle);

    const changeRate = newRate=> setRate(newRate)
  
  const[movieList,setMovieList]=useState(movies)
  const addMovie = (newMovie) => setMovieList([...movieList , newMovie])
    return (
          
        <div className="App">
          <header className="App-header">
            <h1>Movie App</h1>
            <SearchMovie rate={rate} changeRate={changeRate} searchHandler={searchHandler}/>
            <ListMovies movies={
              searchTitle
              ?movieList.filter((el)=>
              el.name.toLowerCase().includes(searchTitle.toLowerCase())
              )
              :rate > 0 
              ? movieList.filter((el)=>el.rating == rate)
              :movieList} />
            <AddModel addMovie={addMovie} />
            </header>
          </div>
    )
}
