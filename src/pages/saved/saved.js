import React from "react";

import Card from "../../components/card/card";
import Spinner from "../../components/spinner/spinner";

const Saved = ({ blocks, saveBlock }) => {

    return (
        <div className="w-6/12 m-auto">
        {blocks?.length ? (
          <div className=" w-full m-auto">
            <Card data={blocks} saveBlock={saveBlock} />
          </div>
        ) : (
          <div className="flex w-full items-center justify-center">
            <Spinner />
          </div>
        )}
      </div>
    );
}

export default Saved;