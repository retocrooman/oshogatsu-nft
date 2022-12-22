import React from 'react';
import {
  useAccount,
  useContractRead,
} from 'wagmi';
import { abi } from '../abis/testNFTabi';
import { mint } from '../utils/axios';

export function GasFreeMintButton (props) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
  
    const [alreadyMinted, setAlreadyMinted] = React.useState(false);
    const [start, setStart] = React.useState(false);
    const [isMintStarted, setIsMintLoading] = React.useState(false);
    const [mintError, setMintError] = React.useState(false);
    const [txHash, setTxHash] = React.useState("");
    const { address, isConnected } = useAccount();

    const { data: mintedData } = useContractRead({
      address: props.contractAddress,
      abi,
      functionName: 'minted',
      args: [address],
      watch: true,
    });

    React.useEffect(() => {
      setAlreadyMinted(false);
    }, [address]);

    React.useEffect(() => {
      if (mintError) {
        setIsMintLoading(false);
      }
    }, [mintError]);
  
    React.useEffect(() => {
      if (mintedData) {
        setAlreadyMinted(mintedData);
      }
    }, [mintedData]);

    React.useEffect(() => {
      if (start) {
        mintStart(address);
      }
      setStart(false);
    }, [start])

    const onClick= () => {
      setMintError(false);
      setIsMintLoading(true);
      setStart(true);
    }

    const mintStart = async () => {
      const txHash = await mint(props.contractAddress, address);
      if (txHash === "") {
        setMintError(true);
      }
      setTxHash(txHash);
      return txHash
    }


    return (
    <>
    {mintError && (
      <p style={{ color: '#FF6257' }}>
        発行に失敗しました。
      </p>
    )}

    {alreadyMinted && (
      <p style={{ color: '#FF6257' }}>
        発行済
      </p>
    )}

    {mounted && isConnected && !alreadyMinted && (
      <button
        type="button"
        style={{ background: "black", color: "white" }}
        disabled={!mint || isMintStarted}
        className="button"
        data-mint-started={isMintStarted}
        onClick={() => onClick()}
      >
        {isMintStarted && '発行中...'}
        {!isMintStarted && '発行する'}
      </button>
    )}
  </>
    )
}
