import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getCompanyInfo } from '../store/reducers/companySlice';
import { formatDate } from './utils';

const Header = ({ companyInfo }) => {
  return (
    <div className='header-container'>
      <h1>{companyInfo.companyName}</h1>
      <p className='motto-text'>{companyInfo.companyMotto}</p>
      <span className='established-date'>
        Since {formatDate(companyInfo.companyEst)}
      </span>
    </div>
  );
};

export default Header;
