import React from 'react';
import Image from 'next/image';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { abi } from '../contract-abi';
import FlipCard, { BackCard, FrontCard } from '../components/FlipCard';

const contractConfig = {
  address: '0x86fbbb1254c39602a7b067d5ae7e5c2bdfd61a30',
  abi,
};

export function MintBox () {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
  
    const [totalMinted, setTotalMinted] = React.useState(0);
    const { isConnected } = useAccount();
  
    const { config: contractWriteConfig } = usePrepareContractWrite({
      ...contractConfig,
      functionName: 'mint',
    });
  
    const {
      data: mintData,
      write: mint,
      isLoading: isMintLoading,
      isSuccess: isMintStarted,
      error: mintError,
    } = useContractWrite(contractWriteConfig);
  
    const { data: totalSupplyData } = useContractRead({
      ...contractConfig,
      functionName: 'totalSupply',
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
      if (totalSupplyData) {
        setTotalMinted(totalSupplyData.toNumber());
      }
    }, [totalSupplyData]);
  
    const isMinted = txSuccess;

    return (
        <div style={{ flex: '0 0 auto', paddingLeft: '10px' }}>

        <div style={{ flex: '1 1 auto' }}>
          <div style={{ padding: '24px 24px 24px 0' }}>
            <h1>NFT Demo Mint</h1>
            </div>
            </div>
        <FlipCard>
          <FrontCard isCardFlipped={isMinted}>
            <Image
              layout="responsive"
              src="/nft.png"
              width="500"
              height="800"
              alt="RainbowKit Demo NFT"
            />
            <h1 style={{ marginTop: 24 }}>Rainbow NFT</h1>
          </FrontCard>
          <BackCard isCardFlipped={isMinted}>
            <div style={{ padding: 24 }}>
              <Image
                src="/nft.png"
                width="80"
                height="160"
                alt="RainbowKit Demo NFT"
                style={{ borderRadius: 8 }}
              />
              <h2 style={{ marginTop: 24, marginBottom: 6 }}>NFT Minted!</h2>
              <p style={{ marginBottom: 24 }}>
                Your NFT will show up in your wallet in the next few minutes.
              </p>
              <p style={{ marginBottom: 6 }}>
                View on{' '}
                <a href={`https://goerli.etherscan.io/tx/${mintData?.hash}`}>
                  Etherscan
                </a>
              </p>
              <p>
                View on{' '}
                <a
                  href={`https://testnets.opensea.io/assets/rinkeby/${txData?.to}/1`}
                >
                  Opensea
                </a>
              </p>
            </div>
          </BackCard>
        </FlipCard>

        <div style={{ flex: '1 1 auto' }}>
          <div style={{ padding: '24px 24px 24px 0' }}>
            <p style={{ margin: '12px 0 24px' }}>
              {totalMinted} minted so far!
            </p>

            {mintError && (
              <p style={{ marginTop: 10, color: '#FF6257' }}>
                Error: {mintError.message}
              </p>
            )}
            {txError && (
              <p style={{ marginTop: 10, color: '#FF6257' }}>
                Error: {txError.message}
              </p>
            )}

            {mounted && isConnected && !isMinted && (
              <button
                style={{ marginTop: 10 }}
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
          </div>
        </div>

      </div>
    )
}
