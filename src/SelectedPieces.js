import React from "react";

const SelectedPieces = ({ selectedPieces, reset }) => {
  const a = selectedPieces.length ? (
    selectedPieces.map(piece => {
      return piece ? (
        <div className="collection-item center" key={piece.bookOrder}>
          <span>{piece.name}</span>
        </div>
      ) : null;
    })
  ) : reset ? (
    <p className="center">Click Randomize!</p>
  ) : (
    <p className="center">
      Cycled through all possible pieces. <br />
      Click Reset
    </p>
  );
  return <div className="collection">{a}</div>;
};

export default SelectedPieces;
