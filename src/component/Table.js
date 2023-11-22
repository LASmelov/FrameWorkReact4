import React from 'react';
import './module.css';






const Table = ({ data }) => {
  return (
    <div className='tableborder'>
    <table className='table1'>
      <thead>
        <tr>
          <th>NAME</th>
          <th>CARD NUMBER</th>
          <th>DATE EXPIRE</th>
          <th>CODE</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.cardHolderName}</td>
            <td>{item.cardNumber}</td>
            <td>{item.year}/{item.month}</td>
            <td>{item.cvc}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;