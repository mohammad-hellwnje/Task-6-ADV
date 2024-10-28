const initialState = {
  isMenuOpen: false,
  isDarkMode: false,  
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case 'TOGGLE_DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export default navbarReducer;
