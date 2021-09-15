import React, { Component } from 'react';
import { CardList } from './Components/Card-List/Card-List.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      Monsters: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ Monsters: users }));
  }


  render() {
    return (
      <div className="App">
        <CardList name='Monsters-Name'>
          {
            this.state.Monsters.map(Monster => (<h1 key={Monster.id}>
              {Monster.name}
            </h1>))
          }</CardList>
      </div>
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
