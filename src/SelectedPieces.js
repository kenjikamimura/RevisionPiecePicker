import React from "react";

const SelectedPieces = ({ selectedPieces }) => {
  const a = selectedPieces.length ? (
    selectedPieces.map(piece => {
      return (
        <div className="collection-item center" key={piece.bookOrder}>
          <span>{piece.name}</span>
        </div>
      );
    })
  ) : (
    <p className="center">Click Randomize!</p>
  );
  return <div className="collection">{a}</div>;
};

export default SelectedPieces;
