import React from "react";
import Card from "./Card";
function Tours({tours, removeTour, interestTour}){
    return(
        <div>
            <h2>Plan With Love</h2>
            <div>
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