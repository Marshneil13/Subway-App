import React from "react";
import Card from "../components/Card";
import subways from "../json/subwayData";

function HomePage() {
  return (
    <div>
      <div className="row">
        {subways.map((subway) => {
          return (
            <div className="col-md-4">
              <Card subway={subway} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
