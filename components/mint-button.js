import React from 'react';
import {
  useAccount,
  useContractWrite,
  useContractRead,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { abi } from '../abis/testNFTabi';

export function MintButton (props) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
  
    const [alreadyMinted, setAlreadyMinted] = React.useState(false);
    const { address, isConnected } = useAccount();
  
    const { config: contractWriteConfig } = usePrepareContractWrite({
      address: props.contractAddress,
      abi,
      functionName: 'mint',
    });
  
    const {
      data: mintData,
      write: mint,
      isLoading: isMintLoading,
      isSuccess: isMintStarted,
      error: mintError,
    } = useContractWrite(contractWriteConfig);
  
    const { data: mintedData } = useContractRead({
      address: props.contractAddress,
      abi,
      functionName: 'minted',
      args: [address],
      watch: true,
    });
  
    const {
      data: txData,
      isSuccess: txSuccess,
      error: txError,
    } = useWaitForTransaction({
      hash: mintData?.hash,
    });
  
    React.useEffect(() => {
      if (mintedData) {
        setAlreadyMinted(mintedData);
      }
    }, [mintedData]);
  
    const isMinted = txSuccess;


    return (
    <>
    {mintError && (
      <p style={{ color: '#FF6257' }}>
        Error: {mintError.message}
      </p>
    )}

    {txError && (
      <p style={{ color: '#FF6257' }}>
        Error: {txError.message}
      </p>
    )}

    {alreadyMinted && (
      <p style={{ color: '#FF6257' }}>
        minted!
      </p>
    )}

    {mounted && isConnected && !isMinted && !alreadyMinted && (
      <button
        type="button"
        style={{ background: "black", color: "white" }}
        disabled={!mint || isMintLoading || isMintStarted}
        className="button"
        data-mint-loading={isMintLoading}
        data-mint-started={isMintStarted}
        onClick={() => mint?.()}
      >
        {isMintLoading && 'Waiting for approval'}
        {isMintStarted && 'Minting...'}
        {!isMintLoading && !isMintStarted && 'Mint'}
      </button>
    )}
  </>
    )
}
