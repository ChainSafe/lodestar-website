import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';

export const Community: React.FC = () => {
  return (
    <Fragment>
      <div className='community'>
        <div className='community--stats'>
          <div className='text-wrapper'>
              <h1>Lodestar is an alternative client.</h1>
              <p>Ethereum's decentralized network has greater resilience supporting multi-client architecture. Running clients with less usage reduces your risk during correlated failures.</p>
              <a href="https://dankradfeist.de/ethereum/2022/03/24/run-the-majority-client-at-your-own-peril.html" target="__blank" rel="noopener noreferrer"><Button dark>Read on</Button></a>
              <img src='/stronger.png' alt="" />
            </div>
        </div>
        <div className='community--double-col'>
          <div className='card typescript'>
            <h1>Written in the world’s most popular programming language.</h1>
            <p>Lodestar is written in TypeScript, making it an accessible entry point into Ethereum development.</p>
            <a href="https://github.com/ChainSafe/lodestar" target="__blank" rel="noopener noreferrer"><Button primary>Source Code</Button></a>
            <img src="/TS.png" alt="" />
          </div>
          <div className='card social'>
            <h1>A vibrant community.</h1>
            <p>Feel welcome, meet fellow contributors, and stay up to date on the latest news in our Discord.</p>
            <div className='button-group'>
              <a href="https://discord.com/invite/yjyvFRP" target="__blank" rel="noopener noreferrer"><Button primary>Join Discord</Button></a>
              <a href="https://chainsafe.typeform.com/lodestar?typeform-source=github.com" target="__blank" rel="noopener noreferrer"><Button dark>Receive Security Updates</Button></a>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
};
