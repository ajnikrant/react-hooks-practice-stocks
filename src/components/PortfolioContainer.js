import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioArray}) {

  const renderMyStocks = portfolioArray.map((stock) => <Stock key={stock.name} stock={stock} />)
  return (
    <div>
      <h2>My Portfolio</h2>
      {renderMyStocks}
    </div>
  );
}

export default PortfolioContainer;
