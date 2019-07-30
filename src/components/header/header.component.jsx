import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container ' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <span className='user' style={{ color: '#00bfa5' }}>
        {currentUser && currentUser.email ? currentUser.email : ''}
      </span>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {
        currentUser ?
        // <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        <Link className='option' onClick={() => auth.signOut()} to='/'>SIGN OUT</Link>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <Link className='option' to='/test'>TEST</Link>
    </div>
  </div>
)

export default Header;