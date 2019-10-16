import {
   SET_THEME,
   SET_SUBMENU
} from '../types'

export default (state, action) => {
   switch (action.type) {
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