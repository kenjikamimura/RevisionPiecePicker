import React, { Component } from "react";
import SelectedPieces from "./SelectedPieces";

import bookOne from "./constants/bookOne";
class App extends Component {
  state = {
    selectedPieces: []
  };

  //Todo extract this out to helper file
  compare = (a, b) => {
    if (a.bookOrder < b.bookOrder) {
      return -1;
    }
    if (a.bookOrder > b.bookOrder) {
      return 1;
    }
    return 0;
  };
  generateRandomPieces = () => {
    //Todo: Add algoithm which creates an array which will make the probability of
    // getting higher order pieces more likely

    let tempBookOne = bookOne;

    //Todo refactor this to be cleaner, extract out to helper file
    var firstPiece =
      tempBookOne[Math.floor(Math.random() * tempBookOne.length)];
    tempBookOne = tempBookOne.filter(
      song => firstPiece.bookOrder !== song.bookOrder
    );

    var secondPiece =
      tempBookOne[Math.floor(Math.random() * tempBookOne.length)];
    tempBookOne = tempBookOne.filter(
      song => secondPiece.bookOrder !== song.bookOrder
    );
    var thirdPiece =
      tempBookOne[Math.floor(Math.random() * tempBookOne.length)];
    tempBookOne = tempBookOne.filter(
      song => thirdPiece.bookOrder !== song.bookOrder
    );

    let selectedPieces = [firstPiece, secondPiece, thirdPiece];
    selectedPieces = selectedPieces.sort(this.compare);
    this.setState({ selectedPieces });
  };

  render() {
    return (
      <div className="container">
        <h1 className="center blue-text lighten-2">Revision Piece Picker</h1>
        <SelectedPieces selectedPieces={this.state.selectedPieces} />
        <div className="center">
          <a
            className="waves-effect waves-light btn blue lighten-2 "
            onClick={this.generateRandomPieces}
          >
            Randomize!
          </a>
        </div>
      </div>
    );
  }
}

export default App;
