import React from 'react'
import { Card } from  "react-bootstrap";
import Rate from './Rate';



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
      <Rate rate={el.rating} />
       </Card.Body>
    </Card>
    </div>
     ))}
    </div>
    )
}


export default ListMovies;

