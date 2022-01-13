import React from "react";
import { Link } from "react-router-dom";

import Card from "../../components/card/card";

import Spinner from "../../components/spinner/spinner";

const Home = ({ blocks, checkDetails, saveBlock, heandlerNumberForPrevBlocks }) => {
  return (
    <div className="w-7/12 m-auto">
      {blocks?.length ? (
        <div className=" w-full  m-auto ">
          <Card
            blocks={blocks}
            checkDetails={checkDetails}
            saveBlock={saveBlock}
            heandlerNumberForPrevBlocks={heandlerNumberForPrevBlocks}
          />
          <div className="w-full flex justify-center">
            <button className="bg-sky-200 mt-5 text-sky-500 text-2xl text- p-3 rounded-md hover:bg-sky-500 hover:text-white ">
              {" "}
              <Link to="/saved"> Watch saved blocks </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Home;
