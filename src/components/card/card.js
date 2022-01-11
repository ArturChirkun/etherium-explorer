import React from "react";

import CardItem from "../card-item/card-item";

const Card = ({ data, checkDetails }) => {
  return (
    <div className="w-100% border rounded-md shadow-xl">
      <div className="p-3 border-b">Header</div>
      <div className="p-3">
        <div className="h-96 hover:overflow-y-scroll hover:scroll-m-3 overflow-hidden ">
          {data?.map((block) => (
            <CardItem
              key={block.blockNumber}
              numberOfBlock={block.blockNumber}
              timeStamp={block.timeStamp}
              blockMiner={block.blockMiner}
              blockReward={block.blockReward}
              checkDetails={checkDetails}
            />
          ))}
        </div>
      </div>

      <div className="p-3 border-t">
        <div className="bg-sky-200 hover:bg-sky-500 rounded-md text-center text-sky-500 hover:text-white hover:cursor-pointer ">
          View all blocks
        </div>
      </div>
    </div>
  );
};

export default Card;
