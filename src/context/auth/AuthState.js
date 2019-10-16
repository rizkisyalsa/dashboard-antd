import React, { useReducer } from 'react'

import {
   SET_COLLAPSED,
   SET_THEME,
   SET_SUBMENU
} from '../types'
import AuthContext from './authContext'
import authReducer from './authReducer'

const AuthState = props => {
   const initialState = {
      collapsed: false,
      theme: 'light',
      subMenu: [],
      currentSubMenu: []
   }

   const [state, dispatch] = useReducer(authReducer, initialState)

   // Set theme
   const setCollapsed = () => dispatch({ type: SET_COLLAPSED })

   // Set theme
   const setTheme = () => dispatch({ type: SET_THEME })

   // Set submenu
   const setSubMenu = (key) => {
      dispatch({
         type: SET_SUBMENU,
         payload: key
      })
   }
   
   return(
      <AuthContext.Provider
         value={{
            collapsed: state.collapsed,
            theme: state.theme,
            subMenu: state.subMenu,
            setCollapsed,
            setTheme,
            setSubMenu
         }}>
         { props.children }
      </AuthContext.Provider>
   )
}

export default AuthState