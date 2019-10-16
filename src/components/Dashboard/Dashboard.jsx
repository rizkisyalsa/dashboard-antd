import React, { useState, useContext } from 'react'
import { Layout, Divider } from 'antd';

import AuthContext from '../../context/auth/authContext'

import Topbar from './Topbar/Topbar'
import Sidebar from './Sidebar/Sidebar'
import Bottombar from './Bottombar/Bottombar'

const Dashboard = ({ children }) => {

   const authContext = useContext(AuthContext)
   const { theme, setTheme, subMenu, setSubMenu} = authContext
   
   const [collapsed, setCollapsed] = useState(false)

   const onTheme = () => {
      const themeAll = theme === "light" ? "dark" : "light";
      document.documentElement.classList.add("color-theme-in-transition");
      setTheme()
      document.documentElement.setAttribute("data-theme", themeAll);
      window.setTimeout(() => {
         document.documentElement.classList.remove("color-theme-in-transition");
      }, 1000);
   }
   const onCollapsed = () => setCollapsed(!collapsed)
   const { Content } = Layout

   return (
      <Layout style={{ minHeight: '100vh' }}>
         <Sidebar
            collapsed={collapsed}
            theme={theme}
            onTheme={onTheme}
            subMenu={subMenu}
            setSubMenu={setSubMenu}
         />
         <Layout style={{ backgroundColor: 'var(--secondaryBg)' }}>
            <Topbar
               collapsed={collapsed}
               onCollapsed={onCollapsed} />
            <Content style={{ margin: '3rem' }}>
               {children}
            </Content>
            <Divider style={{ margin: 0, backgroundColor: 'var(--primaryBorder)' }} />
            <Bottombar />
         </Layout>
      </Layout>
   )
}

export default Dashboard
