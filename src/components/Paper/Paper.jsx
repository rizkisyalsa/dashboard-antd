import React from 'react'

import './paper.scss'

const Paper = ({ children }) => {
   return (
      <div className='paper'>
         {children}
      </div>
   )
}

export default Paper
