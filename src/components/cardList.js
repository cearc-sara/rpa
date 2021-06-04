import React from 'react';
import {connect} from 'react-redux';
import Cards from './cards';

function CardList(props) {
    console.log("props", props)
    return(
        <div>
            {props.cards.map((card) => {
                return <Cards key={card.cardBackId} card={card} />
            })}
        </div>
    )
}

function mapStateToProps(state){
    return{
        cards: state.cards
    }
}

export default connect(mapStateToProps, {})(CardList)