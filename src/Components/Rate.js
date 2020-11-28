import React from 'react'
import "../App.css"

const Rate = ({rate=0 , rateChange}) => {
    let star = [];
    for(let i =0 ; i< 5; i++){
        if (i< rate) {
            star.push(<span className="star" onClick={()=>rateChange(i+1)}>★</span>);
        }
        else{
            star.push(<span onClick={()=>rateChange(i+1)}>★</span>)
        }
    }
return star;
};

export default Rate
   