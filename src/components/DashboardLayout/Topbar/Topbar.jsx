import React from 'react'
import { Layout, Icon, Avatar, Menu, Dropdown, } from 'antd';

import './topbar.scss'

const Topbar = ({ collapsed, setCollapsed, setSubMenu }) => {

   const onCollaps = () => {
      setCollapsed()
      setSubMenu([])
   }

   const menu = (
      <Menu>
         <Menu.Item key="0">
            <Icon type="user" /> Profile
         </Menu.Item>
         <Menu.Divider />
         <Menu.Item key="1">
            <Icon type="logout" /> Logout
        </Menu.Item>
      </Menu>
   );

   return (
      <Layout.Header className='header'>
         <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'close-circle'}
            onClick={onCollaps}
            style={{ color: 'var(--secondaryText)' }}
         />

         <Dropdown overlay={menu}>
            <div>
               <Avatar style={{ backgroundColor: '#87d068', marginRight: '3.5rem' }} icon="user" />
            </div>
         </Dropdown>



      </Layout.Header>
   )
}

export default Topbar
