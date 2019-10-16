import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb as BreadcrumbAntd, Icon } from 'antd'

const Breadcrumb = ({ location }) => {

   const list = {
      home: ['/home', 'home', 'home'],
      users: ['/users', 'desktop', 'users'],
      team: ['','team','team'],
      rizki: ['/rizki','','rizki'],
      elis: ['/elis','','elis'],
   }

   const {home, users, team, rizki, elis} = list

   const breadcrumb = [
      {
         path: '/home',
         url: [home]
      },
      {
         path: '/users',
         url: [home, users]
      },
      {
         path: '/elis',
         url: [home, team, elis]
      },
      {
         path: '/rizki',
         url: [home, team, rizki]
      }
   ]

   const breadcrumbNow = breadcrumb.filter((e) => e.path === location.pathname)

   return (
      <BreadcrumbAntd style={{ marginBottom: '2.4rem', color: 'var(--secondaryText)' }}>
         {breadcrumbNow[0].url.map(e => (
            <BreadcrumbAntd.Item>
               {
                  e[0] === '' ?
                     (<span><Icon type={e[1]} /> {e[2]}</span>)
                     : (<Link to={e[0]}><Icon type={e[1]} /> {e[2]}</Link>)
               }
            </BreadcrumbAntd.Item>
         ))}

      </BreadcrumbAntd>
   )
}

export default withRouter(Breadcrumb)
