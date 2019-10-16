import React, { useReducer } from 'react'

import {
   SET_THEME,
   SET_SUBMENU
} from '../types'
import AuthContext from './authContext'
import authReducer from './authReducer'

const AuthState = props => {
   const initialState = {
      theme: 'light',
      subMenu: null
   }

   const [state, dispatch] = useReducer(authReducer, initialState)

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
            theme: state.theme,
            subMenu: state.subMenu,
            setTheme,
            setSubMenu
         }}>
         { props.children }
      </AuthContext.Provider>
   )
}

export default AuthState