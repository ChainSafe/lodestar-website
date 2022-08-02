import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';
import { tools } from '../../tools';

export const GeneralInfo: React.FC = () => {
  return (
    <Fragment>
      <div className='general'>
        <div className='general--about'>
          <div className='text-wrapper'>
            <h1 className='about-text'>Lodestar is a consensus beacon node and validator client for the Ethereum blockchain network. We develop tools to enable Ethereum protocol development for the JavaScript ecosystem.</h1>
          </div>
          <div className='cli'></div>
        </div>
        <div className='general--setup'>
          <h1 className='title'>Community-run technology that rewards participation.</h1>
          <div className='text-wrapper'>
            <h2>Running a validator rewards you for keeping the network secure.  Validating with minority clients like Lodestar, keep us safer.</h2>
            <a href="/" target="__blank" rel="noopener noreferrer"><Button primary>Comprehensive Setup Guide</Button></a>
          </div>
        </div>
        <div className='general--tools'>
          <h1 className='title'>Supporting the Ethereum developer ecosystem</h1>
          <div className='text-wrapper'>
            <h2>We develop useful tools for the Ethereum community to simplify development.</h2>
          </div>
          <div className='tools-wrapper'>
            {tools.map(({url, name}, i) => (
              <div className='tool' key={name + i}>
                <a href={url} target="__blank" rel="noopener noreferrer"><img src="/thumb.png" alt="" /></a>
                <a href="/" target="__blank" rel="noopener noreferrer">{name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
