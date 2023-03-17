import React, { useState } from "react";
import data from './data';
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] =useState(data);

  function removeHandler(id){
    const newTours = tours.filter(tour=> tour.id !== id);
    setTours(newTours);
  }

  function interestedHandler(id){
    const selectedTour = tours.filter(tour=> tour.id == id);
    setTours(selectedTour);
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No tour plan</h2>
        <button onClick={()=> setTours(data)}>Refresh</button>
      </div>
    );
  }

  return(
    <div>
      <Tours tours={tours} removeTour={removeHandler} interestTour={interestedHandler}></Tours>
    </div>
  );
};

export default App;
