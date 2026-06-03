"use client";

import { useState } from 'react';

export default function LaunchpadPage() {
  const [amount, setAmount] = useState('');

  const handleContribute = () => {
    alert(`Contributed ${amount} ETH to the launch (demo)`);
    // Real version: connect wallet and call contribute()
  };

  const handleLaunch = () => {
    alert('Launching token + adding liquidity (demo)');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-2 text-center">Meme Coin Launchpad</h1>
      <p className="text-center text-gray-500 mb-8">Fair launch on Base</p>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Amount in ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-4 border rounded-2xl text-xl"
        />

        <button
          onClick={handleContribute}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl text-lg font-semibold"
        >
          Contribute
        </button>

        <button
          onClick={handleLaunch}
          className="w-full border py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50"
        >
          Launch Token
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Demo UI. Full version includes bonding curve + liquidity provision.
      </p>
    </div>
  );
}