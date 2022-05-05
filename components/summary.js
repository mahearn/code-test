import React from 'react';
import SummaryTile from './summary-tile';

const Summary = () => {
  return (
    <div>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Contact No.</th>
            <th scope='col'>Address</th>
          </tr>
        </thead>
        <tbody>
          {/* iterate through data here */}
          <SummaryTile />
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
