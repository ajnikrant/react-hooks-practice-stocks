import React from "react";
import Stock from "./Stock";

function StockContainer({stockArray, handleClick}) {
  
  const renderStocks = stockArray.map((stock) => <Stock handleClick={handleClick} key={stock.id} stock={stock} />)

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
