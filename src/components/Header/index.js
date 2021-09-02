import React from 'react';
import {useSelector} from 'react-redux';

import './styles.css';
import {Link} from  'react-router-dom'

import logo from  '../../assets/logo.svg';

function Header() {
  const reserveSize = useSelector(state => state.reserve.length)
  return (
      <header className='container'>
        <Link to='/'>
            <img className='logo' alt='logo do projeto' src={logo}/>
        </Link>
        <Link className='reserva' to='/reservas'>
           <div>
              <strong>Minhas Reservas</strong>
              <span>{reserveSize} reserva</span>
           </div>
        </Link>

      </header>
  )
}

export default Header;