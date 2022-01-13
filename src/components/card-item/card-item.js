import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Plus } from "../../assets/iconmonstr-plus-6.svg";
import { ReactComponent as Minus } from "../../assets/iconmonstr-minus-6.svg";

const CardItem = ({
  numberOfBlock,
  timeStamp,
  blockMiner,
  blockReward,
  checkDetails,
  saveBlock,
  deleteBlock
}) => {
  const hof = (func, arg) => {
    return () => {
      func(arg);
    };
  };

  return (
    <div className="flex border-b p-3 ">
      <div className="flex w-4/12">
        <div className="flex bg-slate-200 rounded-md mr-3 p-3">BK</div>
        <div className="mr-3 ">
          {checkDetails && (
            <div>
              {" "}
              <span className="font-bold"> Number of block: </span>{" "}
              <Link to="/details">
                <span
                  className="text-sky-500 hover:cursor-pointer  hover:text-sky-700"
                  onClick={hof(checkDetails, numberOfBlock)}
                >
                  {" "}
                  {numberOfBlock}{" "}
                </span>{" "}
              </Link>{" "}
            </div>
          )}
          <div>
            {" "}
            <span className="font-bold"> Timestamp: </span> {timeStamp}
          </div>
        </div>
      </div>
      <div className="flex w-6/12">
        <div>
          <div className="flex ">
            {" "}
            <span className="font-bold"> Blockminer: </span> {blockMiner}
          </div>
          <div>
            <span className="font-bold"> Blockreward: </span> {blockReward}
          </div>
        </div>
      </div>
      {saveBlock ? (
        <div
          className="flex w-2/12 m-auto justify-center "
          onClick={hof(saveBlock, numberOfBlock)}
        >
          <span className=" hover:cursor-pointer">
            <Plus />
          </span>
        </div>
      ) : (        <div
        className="flex w-2/12 m-auto justify-center "
        onClick={hof(deleteBlock, numberOfBlock)}
      >
        <span className=" hover:cursor-pointer">
          <Minus />
        </span>
      </div>)}
    </div>
  );
};

export default CardItem;
