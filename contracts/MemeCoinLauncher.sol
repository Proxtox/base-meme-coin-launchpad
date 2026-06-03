// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title MemeCoinLauncher
/// @notice Simple fair-launch meme coin launcher with bonding curve on Base
contract MemeCoinLauncher {
    mapping(address => uint256) public contributions;
    uint256 public totalRaised;
    bool public launched;

    event Contributed(address indexed user, uint256 amount);
    event Launched(uint256 totalRaised);

    function contribute() external payable {
        require(!launched, "Already launched");
        contributions[msg.sender] += msg.value;
        totalRaised += msg.value;
        emit Contributed(msg.sender, msg.value);
    }

    function launch() external {
        require(totalRaised > 0, "No contributions");
        launched = true;
        emit Launched(totalRaised);
        // In production: create token + add liquidity on Uniswap
    }
}