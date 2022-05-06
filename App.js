import React, { useEffect } from 'react';
import Header from './components/header';
import SearchBar from './components/search-bar';
import Summary from './components/summary';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanyInfo } from './store/reducers/companySlice';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.companies.company);

  const { companyInfo, employees } = company;

  useEffect(() => {
    dispatch(getCompanyInfo());
  }, []);

  return (
    <div className='container container-border'>
      <Header companyInfo={companyInfo} />
      <SearchBar />
      <Summary employees={employees} />
    </div>
  );
};

export default App;
