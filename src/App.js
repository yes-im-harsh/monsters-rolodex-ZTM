import React, { Component } from 'react';
import { CardList } from './Components/Card-List/Card-List.component';
import './App.css';
import { SearchBox } from './Components/Search-Box/Seach-Box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      Monsters: [],
      SearchField: ''
    };
    // this.onHandleChange = this.onHandleChange.bind(this); //No use of doin this in new es-6 feature, just make an arrow fuction to do this.
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ Monsters: users }));
  }

  // onHandleChange(e) {
  //   this.setState({ SearchField: e.target.value }) //Old way, IN es-6 just declear a function with arrow function, and then you can use this key word to get state.
  // }

  onHandleChange = (e) => {
    this.setState({ SearchField: e.target.value })
  }

  render() {
    // const Monsters = this.state.Monsters;
    // const SearchField = this.state.SearchField;
    const { Monsters, SearchField } = this.state;
    const FiltedSearch = Monsters.filter(monster => monster.name.toLowerCase().includes(SearchField.toLowerCase()));




    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          PlaceHolder='Search'
          HandleChange={this.onHandleChange} />
        <CardList Monsters={FiltedSearch} />
      </div >
    )
  }
}

//<----------------------------------Part2-------------------------------->
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       Monsters: []
//     };
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState({ Monsters: users }));
//   }


//   render() {
//     return (
//       <div className="App">
//         <CardList name='Monsters-Name'>
//           {
//             this.state.Monsters.map(Monster => (<h1 key={Monster.id}>
//               {Monster.name}
//             </h1>))
//           }</CardList>
//       </div>
//     )
//   }
// }

// <--------------------------First---------------------------------->
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
