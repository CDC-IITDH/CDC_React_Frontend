import React from "react";
import Bredcom from "../Bredcom/Main";
import First from "../menblogdeatils/First";

function Main({blogsData}) {
  return (
    <>
      <Bredcom title="Home" subtitle="Blog Details" />
      <First blogsData={blogsData}/>
    </>
  );
}

export default Main;
