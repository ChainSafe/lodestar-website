import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';

export const Research: React.FC = () => {
  return (
    <Fragment>
      <div className='research'>
          <div className='research--text-wrapper'>
            <div className='column'>
              <h1>Use your JavaScript skills for more than just staking. Many developers are improving Lodestar and our JS libraries in experimental ways.</h1>
              <a href='https://github.com/ChainSafe/lodestar/blob/unstable/README.md' target='__blank' rel='noopener noreferrer'><Button dark>Experiment with Lodestar</Button></a>
            </div>
            <div className='column'>
              <a href='https://ethresear.ch/t/private-message-sharing-for-eth2-validators/10664' target='__blank' rel='noopener noreferrer' className='large-link'>Validator Privacy</a>
              <a href='https://snowbridge.snowfork.com/' target='__blank' rel='noopener noreferrer' className='large-link'>Trustless Bridge with Light Clients</a>
              <a href='https://github.com/AtHeartEngineering/js-libp2p-gossipsub-dandelion' target='__blank' rel='noopener noreferrer' className='large-link'>Dandelion RLP for Validator Privacy</a>
            </div>
        </div>
      </div>
    </Fragment>
  );
};
