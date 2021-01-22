import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'name': 'Yongchol Shin',
  'birthday': '830122',
  'gender': 'male',
  'job': 'Engineer3'
}

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;