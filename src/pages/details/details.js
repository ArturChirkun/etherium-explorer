import React from "react";

import Overview from "../../components/overview/overview";

const DetailsPage = () => {
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
      <Overview number={12124124} />
    </div>
  );
};

export default DetailsPage;
