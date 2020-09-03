import React from 'react';
import './App.css';
import Routes from './Routes';
import Dashboard from './components/Dashboard';
import FormComponent from './components/FormComponent';
import StockList from './components/HOC/StockList';
import UserList from './components/HOC/UserList';
import StockListWithoutHOC from './components/HOC/StockListWithoutHOC';
import UserListWithoutHOC from './components/HOC/UserListWithoutHOC';
import HOC from './components/HOC/HOC';

function App() {
  const StocksData = [
    {
      id: 1,
      name: 'TCS'

    },
    {
      id: 2,
      name: 'Infosys'
    },
    {
      id: 3,
      name: 'Reliance'
    }
  ];
  const UsersData = [
    {
      id: 1,
      name: 'Krunal'

    },
    {
      id: 2,
      name: 'Ankit'
    },
    {
      id: 3,
      name: 'Rushabh'
    }
  ];

  const Stocks = HOC(
    StockList,
    StocksData
  );

  const Users = HOC(
    UserList,
    UsersData
  );
  return (
    <div className='App'>
      {/* <StockListWithoutHOC name="Stocks"></StockListWithoutHOC>
      <UserListWithoutHOC name="Users"></UserListWithoutHOC> */}
      <Users name="Users"></Users>
      <br />
      <Stocks name="Stocks"></Stocks>
      {/* <Dashboard name='Vijaya' age={20} />
      <Routes />
      <FormComponent /> */}
    </div>
  );
}

export default App;
