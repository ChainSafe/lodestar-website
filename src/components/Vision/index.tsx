import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';

export const Vision: React.FC = () => {
  return (
    <Fragment>
      <div className='vision'>
        <img src="/test1.png" alt=""/>
        <h1 className='title'>Lodestar is making it possible for <em>anyone</em> to participate.</h1>
        <div className='vision--properties'>
          <div className='property'>
            <img src="/prop1.png" alt="" />
            <h1>Maximal security, minimal trust, endless opportunities.</h1>
            <p>Using Lodestar to secure the Ethereum network brings us all closer to a world of greater privacy, sovereignty and sustainability.</p>
          </div>
          <div className='property'>
            <img src="/prop2.png" alt="" />
            <h1>Lowering the barrier to greater sovereignty.</h1>
            <p>Lodestar is driving the effort to improve Ethereum usability, expand access to a larger group of developers while maintaining a core value of decentralization. </p>
          </div>
        </div>
        <div className='vision--lightclients'>
          <img src="/prop3.png" alt="" />
          <h1>
            Light Client Ethereum: a node on every device.
          </h1>
          <p>Lodestar is actively contributing to light client protocol development for the Ethereum network. We believe in decentralizing the Ethereum network with trustless blockchain data on browsers and compact devices.</p>
          <div className='button-group'>
            <a href="https://lodestar-lightclient.chainsafe.io/" target="__blank" rel="noopener noreferrer"><Button primary>Try the demo</Button></a>
            <a href="" target="__blank" rel="noopener noreferrer"><Button dark>Contribute to R&D</Button></a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
