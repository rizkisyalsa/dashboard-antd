import React from 'react'
import { Layout } from 'antd';

const Bottombar = () => {
   return (
      <Layout.Footer style={{ textAlign: 'center', padding: '2rem 0', backgroundColor: 'var(--secondaryBg)', color: 'var(--secondaryText)' }}>
         Ant Design ©2018 Created by Ant UED
      </Layout.Footer>
   )
}

export default Bottombar
