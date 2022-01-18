import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import Spinner from "../../components/spinner/spinner";
import { ethereumExplorerService } from "../../components/services/ethrereumApi";

const PrevBlocks = ({ numberOfBlock, checkDetails }) => {
  const [prevBlocks, setPrevBlocks] = useState([]);
  useEffect(() => {
    let addBlocks = ethereumExplorerService.getTenPrevBlocks(numberOfBlock);
    const timer = setTimeout(() => {
      setPrevBlocks(addBlocks);
    }, 7000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="w-7/12 m-auto">
      {prevBlocks?.length ? (
        <div className=" w-full  m-auto ">
          <Card
            blocks={prevBlocks}
            prevBlocks={true}
            checkDetails={checkDetails}
          />
          <div className="w-full flex justify-center">
            <button className="bg-sky-200 mt-5 text-sky-500 text-2xl text- p-3 rounded-md hover:bg-sky-500 hover:text-white ">
              {" "}
              <Link to="/"> Back </Link>
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

export default PrevBlocks;
