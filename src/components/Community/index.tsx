import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';

export const Community: React.FC = () => {
  return (
    <Fragment>
      <div className='community'>
        <div className='community--double-col'>
          <div className='card typescript'>
            <h1>Written in the world’s most popular programming language.</h1>
            <p>It’s all in Typescript. Lodestar is designed to be an accessible entry point into Ethereum development.</p>
            <a href="/" target="__blank" rel="noopener noreferrer"><Button primary>Check out the codebase</Button></a>
            <img src="/TS.png" alt="" />
          </div>
          <div className='card social'>
            <h1>A vibrant community awaits you.</h1>
            <p>Meet fellow contributors and stay up to date with Ethereum news on our Discord.</p>
            <div className='button-group'>
              <a href="https://discord.com/invite/yjyvFRP" target="__blank" rel="noopener noreferrer"><Button primary>Join Discord</Button></a>
              <a href="https://chainsafe.typeform.com/lodestar?typeform-source=github.com" target="__blank" rel="noopener noreferrer"><Button dark>Subscribe for updates</Button></a>
            </div>
          </div>
        </div>
        <div className='community--stats'>
          <img src="/chart.png" alt="" />
          <div className='text-wrapper'>
            <div className='column'>
              <h1>Lodestar is an alternative client.</h1>
              <p>Ethereum’s decentralized network has greater resilience supporting multi-client architecture. Running clients with less usage reduce your risk during correlated failures.</p>
              <a href="https://dankradfeist.de/ethereum/2022/03/24/run-the-majority-client-at-your-own-peril.html" target="__blank" rel="noopener noreferrer"><Button primary>Why run minority clients?</Button></a>
            </div>
            <div className='column'>
              <h1>Stake with Lodestar</h1>
              <p>Earn rewards for securing a $100Bn network, by continuously running the Lodestar client.</p>
              <a href="/" target="__blank" rel="noopener noreferrer"><Button primary>Guide to self-hosting</Button></a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
