import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';

export const Team: React.FC = () => {
  return (
    <Fragment>
      <div className='team'>
          <div className='team--text-wrapper'>
            <div className='column'>
              <h1>Built with love by protocol engineers.</h1>
              <p>Lodestar is maintained by ChainSafe, the world’s leading blockchain research and development firm and avid supporter of open-source software.</p>
              <h2>Join the team to build a brazen future.</h2>
              <a href="https://chainsafe.io/careers" target="__blank" rel="noopener noreferrer"><Button primary>View open positions</Button></a>
            </div>
            <div className='img'>
            </div>
        </div>
      </div>
    </Fragment>
  );
};
