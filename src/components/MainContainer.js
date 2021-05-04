import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import Stock from "./Stock";

function MainContainer() {
  const[stockArray, setStockArray] = useState([])
  const[portfolioArray, setPortfolioArray] = useState([])
  const[filerSelection, setFilterSelection] = useState("all")

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(setStockArray)
  }, [])

  function handleClick(stockId){
    const clickedStock = stockArray.find((stock) => stock.id == stockId)
    setPortfolioArray([...portfolioArray, clickedStock])
  }

  function handleRadioSelect(selection){

    if (selection == "Alphabetically"){
    const alphabetically = [...stockArray].sort((a, b) => a.ticker.localeCompare(b.ticker))
      setStockArray(alphabetically)
    }
    else if (selection == "Price") {    
    const price = [...stockArray].sort((a, b) => a.price - b.price)
    setStockArray(price)
    }
  }

 
    const filteredArray = filerSelection=="all"? stockArray : stockArray.filter((stock) => stock.type == filerSelection)
    // setStockArray(filteredArray)
  

  return (
    <div>
      <SearchBar filerSelection={filerSelection} setFilterSelection={setFilterSelection} sendUpChange={handleRadioSelect}/>
      <div className="row">
        <div className="col-8">
          <StockContainer handleClick={handleClick} stockArray={filteredArray}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioArray={portfolioArray}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
