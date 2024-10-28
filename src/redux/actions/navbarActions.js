export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};
