import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';

export const Hero: React.FC = () => {
  return (
    <Fragment>
      <div className='hero'>
        <img src="/placeholder.png" alt=""/>
        <div className='text-wrapper'>
          <h1>Ethereum protocol meets Javascript.</h1>
          <p>Lodestar is an open-source Ethereum consensus client written in Typescript.</p>
          <div className='button-group'>
            <a href="https://chainsafe.github.io/lodestar/" target="_blank" rel="noopener noreferrer">
              <Button primary>Install Lodestar</Button>
            </a>
            <a href="https://github.com/chainsafe/lodestar" target="_blank" rel="noopener noreferrer">
              <Button dark>Start contributing</Button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
