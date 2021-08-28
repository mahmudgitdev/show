import globalContextCreater from '../context/globalContextCreater';
import axios from 'axios';
const initialState = {
    shows:[],
    singleShow:{},
    loading:false
}
const showReducer = (state,actions)=>{
    switch(actions.type){
        case 'SET_LOADING':
            return{
                ...state,
                loading:true
            }
        case 'SEARCH_SHOWS':
            return{
                ...state,
                shows: actions.payload,
                loading: false
            }
            case 'SET_SINGLE_SHOW':
                return{
                    ...state,
                    singleShow:actions.payload,
                    loading:false
                }
            default:
                return state;
    }
}

const searchShows =  (dispatch) =>{
   return async (searchTerm)=>{
    dispatch({type:'SET_LOADING'});
    const {data} = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    dispatch({
        type:'SEARCH_SHOWS',
        payload:data
       });
   };
}


export const {Context,Provider} = globalContextCreater(showReducer,{searchShows},initialState);