import React, {Component} from 'react';

import './App.css'

import SearchBox from './components/search-box/search-box.component';

import {CardList} from './components/card-list/card-list.component';

 class App extends Component {
  constructor(){
    super();

    this.state = {
       friends: [],
       searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(result => result.json())
    .then(users => this.setState({friends: users}))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value})
  }

  render() {
    const { friends, searchField} = this.state;

    const filteredFriends = friends.filter(friend =>
      friend.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return <div className="App"> 
             <h1>Strange friends</h1>
              <SearchBox onSearchChange={this.onSearchChange} />
              <CardList friends={filteredFriends}/> 
          </div>
        }
}

export default App;
