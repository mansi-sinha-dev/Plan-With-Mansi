import React, { useState } from "react";

function Card({id,name,info,price, image, removeTour, intsTour}){
    
    const [readmore, setReadmore] =useState(false);

    const description = readmore? info:`${info.substring(0,200)}....`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }
   

    return(
        <div className="card">
            <img src={image}></img>
            <div className="tour-info">
              <div className="tour-details">
                 <div className="tour-price">
                    {price}
                 </div>
                 <div className="tour-name">
                    {name}
                 </div>

              </div>
              <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore?`show less`: `read more`}
                </span>
              </div>

            </div>
            <div>
               <button className="btn" onClick={() => intsTour(id)}>Interested</button>
            </div>
            <div>
              <button className="btn-red" onClick={()=> removeTour(id)}>Not Interested</button>
            </div>
        </div>
    );

}
export default Card;