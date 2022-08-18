import React, { Fragment } from 'react';
import './index.scss';

export const Research: React.FC = () => {
  return (
    <Fragment>
      <div className='research'>
          <div className='research--text-wrapper'>
            <div className='column'>
              <h1>Join the many developers who are improving Lodestar and our JavaScript libraries in experimental ways.</h1>
            </div>
            <div className='column'>
              <a href='https://snowbridge.snowfork.com/' target='__blank' rel='noopener noreferrer' className='large-link'>Trustless Bridge with Light Clients</a>
              <a href='https://github.com/AtHeartEngineering/js-libp2p-gossipsub-dandelion' target='__blank' rel='noopener noreferrer' className='large-link'>Dandelion RLP for Validator Privacy</a>
              <a href='https://github.com/ChainSafe/lodestar/blob/unstable/README.md' target='__blank' rel='noopener noreferrer' className='large-link large-link--filled'>Experiment with Lodestar</a>
            </div>
        </div>
      </div>
    </Fragment>
  );
};
