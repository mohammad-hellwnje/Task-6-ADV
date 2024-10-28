import cardsData from './../store/data';

export const fetchCards = () => {
  return {
    type: 'SET_CARDS',
    payload: cardsData,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: page
  };
};
export const setSuggestedCards = (cards) => {
  return {
    type: 'SET_SUGGESTED_CARDS',
    payload: cards,
  };
};

export const setCurrentCard = (card) => {
  return {
    type: 'SET_CURRENT_CARD',
    payload: card,
  };
};
