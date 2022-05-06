import React from 'react';
import SummaryTile from './summary-tile';

const Summary = ({ employees }) => {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Photo</th>
            <th scope='col'>Name</th>
            <th scope='col'>Contact No.</th>
            <th scope='col'>Address</th>
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
