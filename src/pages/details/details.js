import React from "react";
import { Link } from "react-router-dom";

import Overview from "../../components/overview/overview";

const DetailsPage = ({ block }) => {
  return (
    <div className="flex flex-col items-center justify-center w-8/12">
      <div className="flex border rounded-t-md w-full">
        <div className="mr-1 p-3 hover:text-sky-500 hover:cursor-pointer border-2 border-transparent hover:border-b-sky-500 active:border-b-sky-500 ">
          Overview
        </div>
        <div className="pmr-1 p-3 hover:text-sky-500 hover:cursor-pointer border-2 border-transparent hover:border-b-sky-500 active:border-b-sky-500 ">
          Comments
        </div>
      </div>
      <Overview block={block} />
      <div className=" mt-4 font-bold">
        <Link to="/"> Back </Link>
      </div>
    </div>
  );
};

export default DetailsPage;
