import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import navbarReducer from './navbarReducer';  

const rootReducer = combineReducers({
  cards: cardsReducer,    
  navbar: navbarReducer,   
});

export default rootReducer;
