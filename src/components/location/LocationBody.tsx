import React, { FC } from "react";
interface Props {}
const LocationBody: FC<Props> = () => {
  return (
    <>
      <section className="black-box-div flex-container">
        <h2 className="lines">OUR LOCATION</h2>
        <div id="location">
          <h4>99 KING STREET</h4>
          <p className="lines">Newport RI 02840 United States of America</p>
          <p>
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </section>
    </>
  );
};
export default LocationBody;
