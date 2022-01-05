import React from "react";

const CardItem = ({
  numberOfBlock,
  time,
  user,
  numberOfTransactions,
  etherium,
  whatCardItem,
}) => {
  return (
    <div className="flex border-b p-3 ">
      <div className="flex w-6/12">
        <div className="flex bg-slate-200 rounded-md mr-3 p-3">
          {whatCardItem}
        </div>
        <div className="mr-3 ">
          <div>{numberOfBlock}</div>
          <div>{time}</div>
        </div>
      </div>
      <div className="flex w-6/12">
        <div>
          <div className="flex">{user}</div>
          <div>{numberOfTransactions}</div>
        </div>

        <div className="ml-auto">{etherium}</div>
      </div>
    </div>
  );
};

export default CardItem;
