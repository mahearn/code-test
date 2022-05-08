import React from 'react';

const SummaryTile = ({ employee, handleShowModal }) => {
  const { id, avatar, firstName, lastName, contactNo, address } = employee;

  return (
    <tr onClick={() => handleShowModal(employee.id)}>
      <td>{id}</td>
      <td>
        <img src={avatar} alt='avatar' loading='lazy' />{' '}
        {`${firstName} ${lastName}`}
      </td>
      <td>{contactNo}</td>
      <td>{address}</td>
    </tr>
  );
};

export default SummaryTile;
