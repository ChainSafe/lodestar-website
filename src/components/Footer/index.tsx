import React from 'react'
import './index.scss';
import { DiscordLogo, GithubLogo, TwitterLogo,  } from 'phosphor-react';
import { Button } from '../Button';


export const Footer: React.FC = () => {


  return (
    <footer className='footer'>
      <div className='links'>
        <div className='links--column'>
          <a href="https://chainsafe.github.io/lodestar/" target="_blank" rel="noopener noreferrer" className="footer-link">Docs</a>
          <a href="https://share.hsforms.com/19jA2jY8yRf6DKe1LtK5qJQ4kcdm" className="newsletter-link" target="_blank" rel="noopener noreferrer" ><Button dark>Subscribe to newsletter</Button></a>
          <div className='icons'>
            <a href="https://discord.gg/Qdf6GyNB5J" target="_blank" rel="noopener noreferrer"><DiscordLogo size={28} /></a>
            <a href="https://twitter.com/lodestar_eth" target="_blank" rel="noopener noreferrer"><TwitterLogo size={28} /></a>
            <a href="https://github.com/ChainSafe/lodestar" target="_blank" rel="noopener noreferrer"><GithubLogo size={28} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
