import {
   SET_COLLAPSED,
   SET_THEME,
   SET_SUBMENU
} from '../types'

export default (state, action) => {
   switch (action.type) {
      case SET_COLLAPSED:
            return {
               ...state,
               collapsed: !state.collapsed
            }
      case SET_THEME:
         return {
            ...state,
            theme: state.theme === "light" ? "dark" : "light"
         }
      case SET_SUBMENU:
            return {
               ...state,
               subMenu: action.payload
            }
      default:
               return state;
   }
}