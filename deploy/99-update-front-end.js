const { ethers, network } = require("hardhat")
const fs = require("fs")
const frontEndContractsFile = "../nextjs-nft-marketplace/catena/constants/networkMapping.json"

module.exports = async function () {
    // if (process.env.UPDATE_FRONT_END) {
    // await updateContractAddresses() 
    // }
}

async function updateContractAddresses() {
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    const chainId = network.config.chainId.toString()
    const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))

    console.log(nftMarketplace.address, "aASCA")
    if (chainId in contractAddresses) {
        if (!contractAddresses[chainId]["NftMarketpalce"].includes(nftMarketplace.address)) {
            contractAddress[chainId]["NftMarketplace"].push(nftMarketplace.address)
        }
    } else {
        contractAddresses[chainId] = { NftMarketplace: [nftMarketplace.address] }
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
}

module.exports.tags = ["all", "frontend"]
