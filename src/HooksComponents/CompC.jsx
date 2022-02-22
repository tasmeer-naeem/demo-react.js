import React from "react";
import { name, year } from "./Context";

const CompC = () => {
  return (
    <div>
      <name.Consumer>
        {(name) => {
          return (
            <year.Consumer>
              {(year) => {
                return (
                  <div>
                    <h1>hooks {name}</h1>
                    <h1>hooks {year}</h1>
                  </div>
                );
              }}
            </year.Consumer>
          );
        }}
      </name.Consumer>
    </div>
  );
};
export default CompC;
