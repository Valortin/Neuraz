const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying with account:", deployer.address);

    const TradeSignal = await hre.ethers.getContractFactory("TradeSignal");
    console.log("Deploying contract...");
    const contract = await TradeSignal.deploy();
    await contract.waitForDeployment();

    console.log(`Contract deployed to: ${contract.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});