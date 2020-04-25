import React from 'react';
import axios from 'axios';

import UserGrid from './../organisms/UserGrid';

class Users extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  /* componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data
        })
      });
  } */

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({
          users: response.data
        })
      })
  }

  render () {
    const { users } = this.state

    return <UserGrid users={users} />
  }

};

export default Users;