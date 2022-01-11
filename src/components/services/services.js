import axios from "axios";

class EthereumExplorerService {
  arrayOfTimestamp = [
    1578638524, 1641824468, 1641727268, 1641640868, 1641648068, 1641644468,
    1641730868, 1641745268, 1641745868, 1641846668,
  ];

  API_KEY = `3FN3Y4IQDQWSK46ZJQS24QCQ5JF8YA1BU1`;

  getBlockNumberByTimestamp = async (timestamp) => {
    const numberOfBlockByTimestamp = await axios
      .get(
        `https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before&apikey=${this.API_KEY}`
      )
      .then((res) => res.data.result)
      .catch((er) => console.log(er));
    return numberOfBlockByTimestamp;
  };

  getBlockByNumber = async (number) => {
    const block = await axios
      .get(
        `https://api.etherscan.io/api?module=block&action=getblockreward&blockno=${number}&apikey=${this.API_KEY}`
      )
      .then((res) => res.data.result)
      .catch((er) => console.log(er));
    return block;
  };

  getBlocks = () => {
    let counter = 0;
    const blocks = [];

    setInterval(async () => {
      if (counter < 10) {
        const blockNumber = await this.getBlockNumberByTimestamp(
          this.arrayOfTimestamp[counter]
        );
        const block = await this.getBlockByNumber(blockNumber);
        blocks.push(block);
        counter++;
      } else {
        return;
      }
    }, 500);
    return blocks;
  };
}

export const ethereumExplorerService = new EthereumExplorerService();
