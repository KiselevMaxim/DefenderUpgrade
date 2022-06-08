# Prepare project
```shell
npm i
```
# Reproduce issue

defender.proposeUpgrade run successfully on rinkeby:
```shell
npx hardhat run --network rinkeby scripts/propose-upgrade.js  
```
successfull result on rinkeby:
```shell
Preparing upgrading  0xa290667e309548e8dD15aF3ab43a84432055BC97  proposal...
Upgrade proposal created at: https://defender.openzeppelin.com...
```

Issue with defender.proposeUpgrade on gnosis chain:
```shell
npx hardhat run --network gnosis scripts/propose-upgrade.js
```

error on gnosis:
```shell
Preparing upgrading  0x8d01Cf3556FE12188FF565ECD0689Ec6A5D9C1b7  proposal...
ProviderError: VM execution error.
    at HttpProvider.request (/Users/.../DefenderUpgrade/node_modules/hardhat/src/internal/core/providers/http.ts:78:19)
    at LocalAccountsProvider.request (/Users/.../DefenderUpgrade/node_modules/hardhat/src/internal/core/providers/accounts.ts:188:34)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at getImplementationAddressFromBeacon (/Users/.../node_modules/@openzeppelin/upgrades-core/src/impl-address.ts:30:25)
    at isBeacon (/Users/.../node_modules/@openzeppelin/upgrades-core/src/beacon.ts:11:5)
    at Proxy.proposeUpgrade (/Users/.../node_modules/@openzeppelin/hardhat-defender/src/propose-upgrade.ts:48:16)
    at main (/Users/.../DefenderUpgrade/scripts/propose-upgrade.js:17:20)
```

Contracts in both network are transparentUpgradeable proxy and code verified:

**gnosis proxy** (TransparentUpgradeableProxy) [0x8d01Cf3556FE12188FF565ECD0689Ec6A5D9C1b7](https://blockscout.com/xdai/mainnet/address/0x8d01Cf3556FE12188FF565ECD0689Ec6A5D9C1b7/contracts)

**rinkeby proxy** (TransparentUpgradeableProxy) [0xa290667e309548e8dD15aF3ab43a84432055BC97](https://rinkeby.etherscan.io/address/0xa290667e309548e8dD15aF3ab43a84432055BC97#code)
