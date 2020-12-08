import React from 'react'
import { Card } from  "react-bootstrap";
import Rate from './Rate';
import {  Link }  from "react-router-dom";



const ListMovies = (props) => {
    return (
    
        <div className="ListMovies">
    {props.movies.map((el , i)=>( 
        <div key={i} className="movie">
    <Card style={{ width: '18rem' }}>
    <Card.Img 
    variant="top"
    src={el.posterUrl} />
    <Card.Body>
      <Card.Title>{el.name}
     </Card.Title>
    <Card.Text>{el.description}</Card.Text>

    <div>
        <Link  to={`/description/${el.id}` } >Read the description of this movie</Link>
        </div>
   
      <Rate rate={el.rating} />
       </Card.Body>
    </Card>
    </div>
     ))}
    </div>
    )
}


export default ListMovies;

