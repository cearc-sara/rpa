import axios from 'axios';
import { options} from '../constant';


export const GET_CARDS = "GET_CARDS";
export const GET_CARDS_SUCCESS = "GET_CARDS_SUCCESS";
export const GET_CARDS_FAIL = "GET_CARDS_FAIL";

export const getCards = (page) => {
    return (dispatch) => {
        dispatch({type: GET_CARDS});
        axios.request(options)
        .then((res) => {
            console.log("res.data", res.data)
            dispatch({type:GET_CARDS_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            dispatch({type: GET_CARDS_FAIL, payload: {message: "Oh No! We can't seem to find your cards!"}})
        })
    }
}