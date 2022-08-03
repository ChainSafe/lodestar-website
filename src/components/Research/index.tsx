import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';

export const Research: React.FC = () => {
  return (
    <Fragment>
      <div className='research'>
          <div className='research--text-wrapper'>
            <div className='column'>
              <h1>Use your JavaScript abilities for more than just staking. Lots of developers are exploring and improving Lodestar in experimental ways.</h1>
              <a href='https://github.com/ChainSafe/lodestar/blob/unstable/CONTRIBUTING.md' target='__blank' rel='noopener noreferrer'><Button dark>Experiment with Lodestar</Button></a>
            </div>
            <div className='column'>
              <a href='https://ethresear.ch/t/private-message-sharing-for-eth2-validators/10664' target='__blank' rel='noopener noreferrer' className='large-link'>Validator Privacy</a>
              <a href='/' target='__blank' rel='noopener noreferrer' className='large-link'>In-browser blockchain research</a>
              <a href='https://github.com/AtHeartEngineering/js-libp2p-gossipsub-dandelion' target='__blank' rel='noopener noreferrer' className='large-link'>Gossipsub + Dandelion RLP</a>
            </div>
        </div>
      </div>
    </Fragment>
  );
};
