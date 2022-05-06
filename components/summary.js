import React from 'react';
import SummaryTile from './summary-tile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

import './styles/summary.css';

const Summary = ({ employees }) => {
  return (
    <div>
      <div>
        <span>Showing 10 of {employees.length}</span>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>
              Name{' '}
              <button>
                <FontAwesomeIcon icon={faSort} size='1x' aria-hidden='true' />
              </button>
            </th>
            <th scope='col'>
              Contact No.{' '}
              <button>
                <FontAwesomeIcon icon={faSort} size='1x' aria-hidden='true' />
              </button>
            </th>
            <th scope='col'>
              Address{' '}
              <button>
                <FontAwesomeIcon icon={faSort} size='1x' aria-hidden='true' />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee) => (
            <SummaryTile employee={employee} key={employee.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
