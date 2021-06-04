import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import CardList from './components/cardList';
import {getCards} from './actions/index';

import './App.css';

function App(props) {
  const {getCards, loadingCards, errorMessage} = props
  const [page, setPage] = useState(1)

  useEffect(() => {
    getCards(page);
  }, [getCards, page])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hearthstone Cards</h1>
      </header>

      <button onClick={()=>setPage(1)}>1</button>

      {!loadingCards ? (<CardList/>) : (<div className='loading'>Searching for Cards</div>)}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </div>
  );
}

function mapStateToProps(state){
  return{
    loadingCards: state.loadingCards,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, {getCards})(App);
