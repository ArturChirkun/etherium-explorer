import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header/header";
import Home from "./pages/home/home";
import DetailsPage from "./pages/details/details";
import { Route, Routes } from "react-router-dom";
import { ethereumExplorerService } from "./components/services/services";
import Saved from "./pages/saved/saved";
import PrevBlocks from "./pages/prevblocks/prevblocks";

function App() {
  const [blocks, setBlock] = useState();
  const [detailsOfBlock, setDetailsOfBlock] = useState({});
  const [savedBlocks, setSavedBlocks] = useState([]);
  const [numberForPrevBlocks, setNumberForPrevBlocks] = useState()
  useEffect(() => {
    let addBlocks = ethereumExplorerService.getBlocks();
    const timer = setTimeout(() => {
      setBlock(addBlocks);
    }, 7000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const checkDetails = (numberOfBlock) => {
    setDetailsOfBlock(
      blocks.find((block) => block.blockNumber === numberOfBlock)
    );
  };

  const saveBlock = (numberOfBlock) => {
    const newBlock = blocks.find(
      (block) => block.blockNumber === numberOfBlock
    );

    const checkOnMatching = savedBlocks.find(
      (block) => block.blockNumber === numberOfBlock
    );

    return !checkOnMatching
      ? setSavedBlocks([...savedBlocks, newBlock])
      : alert("this block is already saved");
  };

  const deleteBlock = (numberOfBlock) => {
    const newArr = savedBlocks.filter((block) => block.blockNumber !== numberOfBlock );
    const checkOnMatching = savedBlocks.find(
      (block) => block.blockNumber === numberOfBlock
    );

    checkOnMatching ? setSavedBlocks(newArr) : alert('this block in not saved')
  };

  const heandlerNumberForPrevBlocks = (numberOfBlock) => {
    setNumberForPrevBlocks(numberOfBlock);
  }
  return (
    <div className="flex flex-col items-center ">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              blocks={blocks}
              checkDetails={checkDetails}
              saveBlock={saveBlock}
              heandlerNumberForPrevBlocks={heandlerNumberForPrevBlocks}
            />
          }
        />
        <Route
          path="details"
          element={<DetailsPage block={detailsOfBlock} />}
        />
        <Route
          path="saved"
          element={
            <Saved
              blocks={savedBlocks}
              checkDetails={checkDetails}
              deleteBlock={deleteBlock}
            />
          }
        />
        <Route path='ten-prev' element={ <PrevBlocks numberOfBlock={numberForPrevBlocks}/> }/>
      </Routes>
    </div>
  );
}

export default App;
