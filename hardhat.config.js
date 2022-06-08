// hardhat.config.js
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("@openzeppelin/hardhat-defender");

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const alchemyApiKey = process.env.ALCHEMY_API_KEY;
const DEFENDER_TEAM_API_KEY = process.env.DEFENDER_TEAM_API_KEY;
const DEFENDER_TEAM_API_SECRET_KEY = process.env.DEFENDER_TEAM_API_SECRET_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    gnosis: {
      url: `https://rpc.ankr.com/gnosis`,
      accounts: [`${PRIVATE_KEY}`]
    }
  },
  solidity: '0.7.3',
  defender: {
    apiKey: DEFENDER_TEAM_API_KEY,
    apiSecret: DEFENDER_TEAM_API_SECRET_KEY,
  },
};