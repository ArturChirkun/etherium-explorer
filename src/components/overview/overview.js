import React from "react";

const Overview = ({ number }) => {
  return (
    <div className="w-full border border-t-0">
      <div className=" w-full px-3">
        <div className="flex w-full p-3 border-b">
          <div className="w-1/4">Block height:</div>
          <div className="">{number}</div>
        </div>
        <div className="flex w-full p-3 border-b">
          <div className="w-1/4">Timestamp:</div>
          <div>{number}</div>
        </div>
        <div className="flex w-full p-3 border-b">
          <div className="w-1/4">Transactions:</div>
          <div>{number}</div>
        </div>
        <div className="flex w-full p-3 border-b">
          <div className="w-1/4">Mined by:</div>
          <div>{number}</div>
        </div>
        <div className="flex w-full p-3 ">
          <div className="w-1/4">Block Reward:</div>
          <div>{number}</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
