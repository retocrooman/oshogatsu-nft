import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function Header() {
    return (
        <div style={{ display: "flex", flexDirection: "row", padding: "24px 24px 24px 24px" }}>
            <div style={{ margin: "0 0 0 auto" }}>
                <ConnectButton/>
            </div>
        </div>
    )
}