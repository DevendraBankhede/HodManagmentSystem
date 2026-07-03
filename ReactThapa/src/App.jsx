import React from "react";

export const App = () => {
  return (
    <div>
    
          <NetflixSeries />
          <NetflixSeries />
          <NetflixSeries />
          <NetflixSeries />
          <NetflixSeries />

    </div>
      

  );
};

const  NetflixSeries = () =>{
  return(
  <div>
      <div>
        <img src="image.png" alt="image.png" width="40%" heght="40%"/>
      </div>
      <h2>Name: Queen of Tears</h2>
      <h3>Rating: 8.2</h3>
      <p>
        Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
        tempore. Eaque officiis natus nesciunt soluta eveniet. Nulla repellendus
        atque in?
      </p>
    </div>
  );
};