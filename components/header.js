import React from 'react';
import { formatDate } from './utils';

const Header = ({ companyInfo }) => {
  const { companyName, companyMotto, companyEst } = companyInfo;

  return (
    <div className='header-container'>
      <h1>{companyName}</h1>
      <p className='motto-text'>{companyMotto}</p>
      <span className='established-date'>Since {formatDate(companyEst)}</span>
    </div>
  );
};

export default Header;
