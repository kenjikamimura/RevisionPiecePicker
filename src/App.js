import React, { useState } from 'react';
import SelectedPieces from './SelectedPieces';
import bookOne from './constants/bookOne';

function App() {
	const [selectedPieces, setSelectedPieces] = useState([]);
	const [currentBookOne, setCurrentBookOne] = useState(bookOne);
	const [reset, setReset] = useState(true);

	// Todo extract this out to helper file
	const compare = (a, b) => {
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

	const generateRandomPieces = () => {
		// Todo: Add algoithm which creates an array which will make the probability of
		// getting higher order pieces more likely

		let tempBookOne = currentBookOne;

		// Todo refactor this to be cleaner, extract out to helper file
		const firstPiece = tempBookOne.length
			? tempBookOne[Math.floor(Math.random() * tempBookOne.length)]
			: null;
		tempBookOne = tempBookOne.filter(song => firstPiece.bookOrder !== song.bookOrder);

		const secondPiece = tempBookOne.length
			? tempBookOne[Math.floor(Math.random() * tempBookOne.length)]
			: null;
		tempBookOne = tempBookOne.filter(song => secondPiece.bookOrder !== song.bookOrder);
		const thirdPiece = tempBookOne.length
			? tempBookOne[Math.floor(Math.random() * tempBookOne.length)]
			: null;

		tempBookOne = tempBookOne.filter(song => thirdPiece.bookOrder !== song.bookOrder);

		let selectedPieces2 = [firstPiece, secondPiece, thirdPiece].filter(Boolean);
		selectedPieces2 = selectedPieces2.sort(compare);

		setSelectedPieces(selectedPieces2);
		setCurrentBookOne(tempBookOne);
		setReset(false);
	};

	const resetSongPool = () => {
		setSelectedPieces([]);
		setCurrentBookOne(bookOne);
		setReset(true);
	};

	return (
		<div className="container">
			<h1 className="center blue-text lighten-2">Revision Piece Picker</h1>
			<SelectedPieces selectedPieces={selectedPieces} reset={reset} />
			<div className="row center">
				<button
					className="waves-effect waves-light btn blue lighten-2 "
					onClick={generateRandomPieces}
				>
					Randomize!
				</button>
			</div>
			<div className="row center">
				<button
					className="waves-effect waves-light btn grey lighten-2 black-text "
					onClick={resetSongPool}
				>
					Reset
				</button>
			</div>
		</div>
	);
}

export default App;
