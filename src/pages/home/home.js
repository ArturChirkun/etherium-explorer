import React from "react";

import Card from "../../components/card/card";

const Home = ({ data }) => {
  return (
    <div className="grid gap-5 grid-cols-2 w-10/12 m-auto">
      <Card data={data} />
      <Card data={data} />
    </div>
  );
};

export default Home;