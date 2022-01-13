import React from "react";
import { Link } from "react-router-dom";

import Card from "../../components/card/card";
import Spinner from "../../components/spinner/spinner";

const Saved = ({ blocks, checkDetails, deleteBlock }) => {
  return (
    <div className="w-6/12 m-auto">
      {blocks.length === 0 || blocks.length ? (
        <div className=" w-full m-auto">
          <Card blocks={blocks} checkDetails={checkDetails} deleteBlock={deleteBlock}/>
          <div className="w-full flex justify-center">
            <button className="bg-sky-200 mt-5 text-sky-500 text-2xl text- p-3 rounded-md hover:bg-sky-500 hover:text-white ">
              {" "}
              <Link to="/"> Back </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Saved;
