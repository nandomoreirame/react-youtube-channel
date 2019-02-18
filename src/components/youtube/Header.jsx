/* eslint jsx-a11y/anchor-is-valid:0 */
import React from 'react'

import logo from '../../logo.svg'

const style = {
  logo: {
    width: '100px',
    display: 'inline-block',
  }
}

const AppHeader = ({ title }) => {
  return (
    <header className='AppHeader center'>
      <h1>
        <img src={logo} alt="React logo" style={style.logo}/>
        <span>{ title }</span>
      </h1>
    </header>
  )
}

export default AppHeader

