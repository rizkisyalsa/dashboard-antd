import React from 'react'
import { Layout, Icon, Avatar } from 'antd';

import './topbar.scss'

const Topbar = ({ collapsed, onCollapsed }) => {
   return (
      <Layout.Header className='header'>
         <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'close-circle'}
            onClick={onCollapsed}
            style={{color:'var(--secondaryText)'}}
         />

         <div className="account">
            <Avatar style={{ backgroundColor: '#87d068', marginRight: '2rem' }} icon="user" />
         </div>

      </Layout.Header>
   )
}

export default Topbar
