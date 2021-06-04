import React, {useState} from 'react';

const Cards = ({card}) => {
    console.log("card name", card)

    return <div className='card'>
       <h2>{card.name}</h2>
       <div>
           <p>{card.description}</p>
       </div>
       {card.img ? <img src={card.img} alt={card.name} /> : <div><p>No Image Found</p></div>}
       
        
    </div>
}

export default Cards