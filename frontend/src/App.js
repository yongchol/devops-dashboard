import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1', 
    'name': 'Yongchol Shin',
    'birthday': '830122',
    'gender': 'male',
    'job': 'Engineer3'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2', 
    'name': 'Yongchol Shin',
    'birthday': '830122',
    'gender': 'male',
    'job': 'Engineer3'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3', 
    'name': 'Yongchol Shin',
    'birthday': '830122',
    'gender': 'male',
    'job': 'Engineer3'
  },
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;