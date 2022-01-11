import React from "react";

import Card from "../../components/card/card";

import Spinner from "../../components/spinner/spinner";

const Home = ({ data, checkDetails }) => {
  return (
    <div className="w-11/12 m-auto">
      {data?.length ? (
        <div className="grid gap-5 grid-cols-2 w-full m-auto">
          <Card data={data} checkDetails={checkDetails} />
          <Card data={data} checkDetails={checkDetails} />
        </div>
      ) : (
        <div className="flex w-full items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Home;
