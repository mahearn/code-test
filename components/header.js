import React from 'react';
import { formatDate } from './utils';

import './styles/header.css';

const Header = ({ companyInfo }) => {
  const { companyName, companyMotto, companyEst } = companyInfo;

  return (
    <div className='header-container'>
      <h1>{companyName}</h1>
      <p className='motto-text'>{companyMotto}</p>
      <div className='established-date'>
        <p className='date-text'>Since {formatDate(companyEst)}</p>
      </div>
    </div>
  );
};

export default Header;
