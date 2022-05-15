import React from "react";

const web3 = require("@solana/web3.js");

export const getBalance = async (
  userKey: string,
  setBalance: React.Dispatch<React.SetStateAction<number | null>>
) => {
  const publicKey = new web3.PublicKey(userKey);
  const solana = new web3.Connection("https://api.devnet.solana.com");
  const response = await solana.getBalance(publicKey);
  console.log("resp >>> ", response);

  setBalance(response);
};
