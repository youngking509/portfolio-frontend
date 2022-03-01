import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
    <div className="header-wraper">
        <div className="main-info">
            <h1>Kingzy Valcourt</h1>
            <Typed 
              className='type-text'
              strings={['I build Things', 'I debug', 'I create']}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
        </div>
    </div>
  )
}

export default Header