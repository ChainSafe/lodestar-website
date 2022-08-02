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
              <a href="/" target="__blank" rel="noopener noreferrer"><Button primary>Join Discord</Button></a>
              <a href="/" target="__blank" rel="noopener noreferrer"><Button dark>Subscribe for updates</Button></a>
            </div>
          </div>
        </div>
        <div className='stats'>

        </div>
      </div>
    </Fragment>
  );
};
