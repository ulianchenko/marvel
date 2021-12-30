import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';

class App extends Component {
//   state = {
//     randomComponent: true,
//   };

//   toggleComponent = () => {
//     this.setState({
//       randomComponent: !this.state.randomComponent,
//     });
//   };

  render() {
    // const { randomComponent } = this.state;
    return (
      <div className="app">
        <AppHeader />
        <main>
          {/* {randomComponent ? <RandomChar /> : null}
          <button onClick={this.toggleComponent}>Click me</button> */}
          <RandomChar />
          <div className="char__content">
            <CharList />
            <CharInfo />
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;