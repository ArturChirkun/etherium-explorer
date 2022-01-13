import React from "react";
import { Link } from "react-router-dom";

import Card from "../../components/card/card";


const Saved = ({ blocks, checkDetails, deleteBlock }) => {
  return (
    <div className="w-7/12 m-auto">
      {blocks.length !== 0 ? (
        <div className=" w-full m-auto">
          <Card
            blocks={blocks}
            checkDetails={checkDetails}
            deleteBlock={deleteBlock}
          />
        </div>
      ) : (
        <div className="flex w-full items-center justify-center font-bold text-3xl">
          You don't have any saved blocks
        </div>
      )}
      <div className="w-full flex justify-center ">
        <button className="bg-sky-200 mt-5 text-sky-500 text-2xl text- p-3 rounded-md hover:bg-sky-500 hover:text-white ">
          {" "}
          <Link to="/"> Back </Link>
        </button>
      </div>
    </div>
  );
};

export default Saved;
