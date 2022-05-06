import React from 'react';

const SummaryTile = ({ employee }) => {
  const { id, avatar, firstName, lastName, contactNo, address } = employee;

  return (
    <tr>
      <td>{id}</td>
      <td>
        <img src={avatar} alt={`${firstName} ${lastName}'s photo`} />
      </td>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{contactNo}</td>
      <td>{address}</td>
    </tr>
  );
};

export default SummaryTile;
