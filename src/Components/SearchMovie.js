import React, {useState}  from 'react'
import Rate from './Rate';

 

const SearchMovie=({rate,changeRate,searchHandler})=> {

    const searchMovies= async(e)=> {
        e.preventDefault();
        

    }
    return (
        <div>
        <form className="form" onSubmit={searchMovies}>
            <label className="label">MOVIE NAME</label>
            <input className="input-1" type="text" name="Movies"
    placeholder="Search Any Movie"  onChange={e=> searchHandler(e.target.value)}/>
    </form>
    <div className="star-rating">
    <Rate rate={rate} rateChange={changeRate} />
    </div>
    </div>
    )
}

export default SearchMovie
