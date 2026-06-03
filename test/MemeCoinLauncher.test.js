const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MemeCoinLauncher", function () {
  let launcher;
  let owner, user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    const Launcher = await ethers.getContractFactory("MemeCoinLauncher");
    launcher = await Launcher.deploy();
    await launcher.deployed();
  });

  it("Should allow contributions", async function () {
    await launcher.connect(user).contribute({ value: ethers.utils.parseEther("1") });
    expect(await launcher.contributions(user.address)).to.equal(ethers.utils.parseEther("1"));
  });

  it("Should launch after contributions", async function () {
    await launcher.connect(user).contribute({ value: ethers.utils.parseEther("1") });
    await launcher.launch();
    expect(await launcher.launched()).to.equal(true);
  });
});