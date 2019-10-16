import React, { useContext } from 'react'
import { Layout, Divider } from 'antd';

import AuthContext from '../../context/auth/authContext'

import Topbar from './Topbar/Topbar'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Sidebar from './Sidebar/Sidebar'
import Bottombar from './Bottombar/Bottombar'

const Dashboard = ({ children }) => {

   const authContext = useContext(AuthContext)
   const { theme, setTheme, subMenu, setSubMenu, collapsed, setCollapsed } = authContext

   const onTheme = () => {
      const themeAll = theme === "light" ? "dark" : "light";
      document.documentElement.classList.add("color-theme-in-transition");
      setTheme()
      document.documentElement.setAttribute("data-theme", themeAll);
      window.setTimeout(() => {
         document.documentElement.classList.remove("color-theme-in-transition");
      }, 1000);
   }

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
               setCollapsed={setCollapsed}
               setSubMenu={setSubMenu}
            />
            <Content style={{ margin: '2.4rem' }}>
               <Breadcrumb />
               {children}
            </Content>
            <Divider style={{ margin: 0, backgroundColor: 'var(--primaryBorder)' }} />
            <Bottombar />
         </Layout>
      </Layout>
   )
}

export default Dashboard
