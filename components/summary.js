import React, { useState } from 'react';
import SummaryTile from './summary-tile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { formatDate } from './utils';

import './styles/summary.css';

const Summary = ({ employees }) => {
  const [showModal, setShowModal] = useState();
  const [emp, setEmp] = useState({});

  function handleShowModal(id) {
    let selectedEmp = employees.filter((e) => e.id === id);
    let selectedEmpObj = Object.assign({}, ...selectedEmp);
    setShowModal(true);
    setEmp(selectedEmpObj);
  }

  function closeModal() {
    setShowModal(false);
  }

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
            <SummaryTile
              employee={employee}
              handleShowModal={handleShowModal}
              key={employee.id}
            />
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className='Modal'
        overlayClassName='Overlay'
        contentLabel='Employee Detail Modal'
        appElement={document.getElementById('root')}
      >
        <div className='modal-content'>
          <button className='modal-button' onClick={closeModal}>
            X
          </button>
          {Object.keys(emp).length > 0 && (
            <div className='content-wrapper'>
              <div className='photo-content'>
                <div className='emp-photo'>
                  <img
                    src={emp.avatar}
                    alt={`${emp.firstName} ${emp.lastName}`}
                  />
                </div>
                <div className='image-label-text'>
                  <span>{emp.jobTitle}</span>
                  <span>{emp.age}</span>
                  <span>{formatDate(emp.dateJoined)}</span>
                </div>
              </div>
              <div className='employee-details-text'>
                <h4 className='name-header'>
                  {emp.firstName} {emp.lastName}
                </h4>
                <p>{emp.bio}</p>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Summary;
