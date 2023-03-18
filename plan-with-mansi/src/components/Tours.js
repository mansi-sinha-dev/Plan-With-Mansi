import React from "react";
import Card from "./Card";
function Tours({tours, removeTour, interestTour}){
    return(
        <div className="container">
            <div>
               <h2 className="title">Plan With Love</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card {...tour} removeTour={removeTour} intsTour={interestTour}></Card>
                    })
                }
            </div>
        </div>

    );
}

export default Tours;