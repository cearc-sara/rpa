import {GET_CARDS, GET_CARDS_SUCCESS, GET_CARDS_FAIL} from '../actions/index';

export const initialState = {
    cards: [],
    loadingCards: false,
    errorMessage: ""
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_CARDS:
            return{
                ...state,
                loadingCards: true
            }
        case GET_CARDS_SUCCESS:
            return{
                ...state,
                cards: action.payload,
                loadingCards: false
            }
        case GET_CARDS_FAIL:
            return{
                ...state,
                loadingCards: false,
                errorMessage: action.payload.message
            }
        default:
            return state;
    }
}