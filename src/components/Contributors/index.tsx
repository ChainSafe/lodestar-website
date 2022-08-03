import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';

export const Contributors: React.FC = () => {
  return (
    <Fragment>
      <div className='contributors'>
          <div className='contributors--text-wrapper'>
            <div className='column'>
              <h1>The stars of Lodestar.</h1>
              <h2>Thank you for your incredible contributions to Ethereum.</h2>
              <p>Contributing to Lodestar makes you eligible to mint a <a href='https://www.gitpoap.io/gh/ChainSafe/lodestar' target='__blank' rel='noopener noreferrer'>GitPOAP badge!</a></p>
              <div className='button-group'>
                <a href="https://github.com/ChainSafe/lodestar/labels/meta-good-first-issue" target="__blank" rel="noopener noreferrer"><Button primary>Helped Wanted</Button></a>
                <a href="https://ethereum.org/en/bug-bounty/" target="__blank" rel="noopener noreferrer"><Button dark>Bug Bounty Program</Button></a>
              </div>
            </div>
            <div className='grid'>
            </div>
        </div>
      </div>
    </Fragment>
  );
};
