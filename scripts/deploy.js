const hre = require("hardhat");

async function main() {
  const MemeCoinLauncher = await hre.ethers.getContractFactory("MemeCoinLauncher");
  const launcher = await MemeCoinLauncher.deploy();
  await launcher.deployed();
  console.log("MemeCoinLauncher deployed to:", launcher.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});