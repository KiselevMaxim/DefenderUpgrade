// scripts/propose-upgrade.js
const hre = require("hardhat");
const { defender } = require("hardhat");

async function main() {
  let proxyAddress;
  const chainId = await hre.network.provider.send("eth_chainId");
  // 0x64 - gnosis
  // 0x4 - rinkeby
  if (chainId == 0x64) {
    proxyAddress = "0x8d01Cf3556FE12188FF565ECD0689Ec6A5D9C1b7"; // gnosis
  } else if (chainId == 0x4) {
    proxyAddress = '0xa290667e309548e8dD15aF3ab43a84432055BC97'; // rinkeby
  }
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Preparing upgrading ", proxyAddress, " proposal...");
  const proposal = await defender.proposeUpgrade(proxyAddress, BoxV2);
  console.log("Upgrade proposal created at:", proposal.url);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })