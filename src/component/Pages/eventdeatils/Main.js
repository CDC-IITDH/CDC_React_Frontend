import React from "react";
import Bredcom from "../../Bredcom/Main";
import Brand from "../../menhomethree/Brand";
import First from "../meneventdeatils/First";

function Main({eventsData}) {
  return (
    <>
      <Bredcom title="Home" subtitle="Event Details" />
      <First eventsData={eventsData} />
      {/* <Brand /> */}
    </>
  );
}

export default Main;
