import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';

export const Stake: React.FC = () => {
  return (
    <Fragment>
      <div className='stake'>
          <div className='stake--text-wrapper'>
            <div className='column'>
                <h1>Stake with Lodestar</h1>
                <p>Run Lodestar. Earn rewards. And do your part in securing a $100 billion network.</p>
                <a href="/" target="__blank" rel="noopener noreferrer"><Button primary>Guide to self-hosting</Button></a>
              </div>
            <div className='column'>
              <img src="/stake.png" alt="" />
            </div>
        </div>
      </div>
    </Fragment>
  );
};
