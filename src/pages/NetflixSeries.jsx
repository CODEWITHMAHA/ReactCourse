import React from "react";
import seriesData from "../api/seriesData.json";
import SeriesCards from "../Components/SeriesCards";

const NetflixSeries = () => {
  return (
    <>
      <ul className="grid grid-three-cols">
        {seriesData.map((series) =>
          <SeriesCards key={series.id} series={series}/>
        )}
      </ul>
    </>
  );
};

export default NetflixSeries;
