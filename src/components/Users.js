import React from "react";
import '../styles/custom.css';

const users = [
  {
    id: 1,
    company: 'Tata',
    name: 'Krunal'
  },
  {
    id: 2,
    company: 'Yash',
    name: 'Ankit'
  },
  {
    id: 3,
    company: 'Accenture',
    name: 'Rushabh'
  },
  {
    id: 4,
    company: 'Cybage',
    name: 'Alekh'
  }
];
const deleteItem = (item) => {
  console.log(item)
};
const Users = () => {
  return (
    <div className='container'>
      <table className='table table-bordered text-left customWIdth'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.company}</td>
              <td>{item.name}</td>
              <td><button className='btn btn-danger' onClick={() => deleteItem(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
