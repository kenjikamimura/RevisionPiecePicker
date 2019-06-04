import React, { Component } from "react";
import SelectedPieces from "./SelectedPieces";

import bookOne from "./constants/bookOne";
class App extends Component {
  state = {
    selectedPieces: [],
    currentBookOne: bookOne,
    reset: true
  };

  //Todo extract this out to helper file
  compare = (a, b) => {
    if (a === null || b === null) {
      return 0;
    }
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

    let tempBookOne = this.state.currentBookOne;

    //Todo refactor this to be cleaner, extract out to helper file
    var firstPiece = tempBookOne.length
      ? tempBookOne[Math.floor(Math.random() * tempBookOne.length)]
      : null;
    tempBookOne = tempBookOne.filter(
      song => firstPiece.bookOrder !== song.bookOrder
    );

    var secondPiece = tempBookOne.length
      ? tempBookOne[Math.floor(Math.random() * tempBookOne.length)]
      : null;
    tempBookOne = tempBookOne.filter(
      song => secondPiece.bookOrder !== song.bookOrder
    );
    var thirdPiece = tempBookOne.length
      ? tempBookOne[Math.floor(Math.random() * tempBookOne.length)]
      : null;

    tempBookOne = tempBookOne.filter(
      song => thirdPiece.bookOrder !== song.bookOrder
    );

    let selectedPieces = [firstPiece, secondPiece, thirdPiece].filter(Boolean);
    selectedPieces = selectedPieces.sort(this.compare);

    this.setState({
      selectedPieces,
      currentBookOne: tempBookOne,
      reset: false
    });
  };
  resetSongPool = () => {
    this.setState({ selectedPieces: [], currentBookOne: bookOne, reset: true });
  };
  render() {
    return (
      <div className="container">
        <h1 className="center blue-text lighten-2">Revision Piece Picker</h1>
        <SelectedPieces
          selectedPieces={this.state.selectedPieces}
          reset={this.state.reset}
        />
        <div className="row center">
          <button
            className="waves-effect waves-light btn blue lighten-2 "
            onClick={this.generateRandomPieces}
          >
            Randomize!
          </button>
        </div>
        <div className="row center">
          <button
            className="waves-effect waves-light btn grey lighten-2 black-text "
            onClick={this.resetSongPool}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
