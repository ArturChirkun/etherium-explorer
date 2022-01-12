import React, { useState } from "react";

import CardItem from "../card-item/card-item";

const Card = ({ data, checkDetails }) => {
  const [toggleButton, setToggleButton] = useState("View all blocks");

  const viewAllBlocks = () => {
    toggleButton === "View all blocks"
      ? setToggleButton("Hide")
      : setToggleButton("View all blocks");
    const el = document.querySelector(".block-scroll");
    el.classList.toggle("hover:overflow-y-scroll");
    el.classList.toggle("hover:scroll-m-3");
    el.classList.toggle("overflow-hidden");
    el.classList.toggle("h-96");
  };
  return (
    <div className="w-100% border rounded-md shadow-xl">
      <div className="p-3 border-b">Header</div>
      <div className="p-3">
        <div className="h-96 hover:overflow-y-scroll hover:scroll-m-3 overflow-hidden block-scroll">
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
        <div
          className="bg-sky-200 hover:bg-sky-500 rounded-md text-center text-sky-500 hover:text-white hover:cursor-pointer toggleButton"
          onClick={viewAllBlocks}
        >
          {toggleButton}
        </div>
      </div>
    </div>
  );
};

export default Card;
