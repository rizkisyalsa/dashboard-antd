import React from 'react'
import { Layout, Menu, Icon, Switch } from 'antd'
import { Link, withRouter } from 'react-router-dom';

import './sidebar.scss'


const Sidebar = ({ collapsed, theme, onTheme, subMenu, setSubMenu, location }) => {
   
   return (
      <Layout.Sider
         trigger={null} collapsible collapsed={collapsed}
         theme={theme}
      >
         <div className={"sidebar" + (!collapsed ? ' fixed' : '')} >
            <Menu theme={theme}
               openKeys={subMenu}
               onOpenChange={(openKeys)=> setSubMenu(openKeys)}
               selectedKeys={[location.pathname]}
               mode="inline"
               className="sidebar__menu"
            >
               <div className="logo" />

               <Menu.Item key="/home">
                  <Link to='/home'>
                     <Icon type="home" />
                     <span>Home</span>
                  </Link>
               </Menu.Item>

               <Menu.Item key="/users">
                  <Link to='/users'>
                     <Icon type="desktop" />
                     <span>Users</span>
                  </Link>
               </Menu.Item>

               <Menu.SubMenu
                  key="team"
                  title={
                     <span>
                        <Icon type="team" />
                        <span>Team</span>
                     </span>
                  }>
                  <Menu.Item key="/rizki"><Link to='/rizki'>Rizki</Link></Menu.Item>
                  <Menu.Item key="/elis"><Link to='/elis'>Elis</Link></Menu.Item>
               </Menu.SubMenu>

               <Menu.Item key="9">
                  <Icon type="file" />
                  <span>File</span>
               </Menu.Item>
            </Menu>
         </div>

         {!collapsed && (
            <div className='switch-theme'>
               <p><Icon type="bulb" /> Switch Theme</p>
               <Switch
                  checked={theme === 'dark'}
                  onChange={onTheme}
                  checkedChildren="Dark"
                  unCheckedChildren="Light"
               />
            </div>
         )}

      </Layout.Sider>
   )
}



export default withRouter(Sidebar)
