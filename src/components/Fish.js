import React from "react";

const fish = ["GoldFish", "Koi", "Tuna", "Catfish", "Red Herring"];

export default props => {
  console.log("props: ", props);

  return (
    <div>
      <h1>Fish: {fish[props.match.params.id]}</h1>
    </div>
  );
};
