import React, {useState} from 'react';

const Cards = ({card}) => {
    

    return <>
        <div className='card'>
        <h2 className='cardName'>{card.name}</h2>
       <div className='cardDesc'>
           <p>{card.description}</p>
       </div>
       <div className='cardImg'>
       {card.img ? <img src={card.img} alt={card.name} /> : <div><p>No Image Found</p></div>}
       </div>
        
    </div>
    </>
}

export default Cards