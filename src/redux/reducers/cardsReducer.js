import cardsData from './../store/data'; 
const initialState = {
  cards: cardsData, 
  currentPage: 1,   
  cardsPerPage: 6,  
  suggestedCards: [],
  currentCard: null,
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return {
        ...state,
        cards: action.payload,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'SET_SUGGESTED_CARDS':
      return {
        ...state,
        suggestedCards: action.payload,
      };
    case 'SET_CURRENT_CARD':
      return {
        ...state,
        currentCard: action.payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
