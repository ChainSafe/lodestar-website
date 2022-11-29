import React, { Fragment } from 'react';
import './index.scss';

export const Lightclients: React.FC = () => {
  return (
    <Fragment>
      <div className="lightclients">
        <img src="/text.png" alt="" />
        <div className="lightclients--intro">
          <h1>Light-Client Ethereum: a node on every device.</h1>
          <p>
            Light clients enable more people to participate as first-class
            citizens, verifying data on the blockchain without relying on centralized service providers. Lodestar is{' '}
            <a
              href="https://blog.chainsafe.io/the-road-ahead-for-ethereum-light-clients-b6fdb7c3b603"
              target="__blank"
              rel="noopener noreferrer"
            >
              actively contributing
            </a>{' '}
            to light client development for Ethereum.
          </p>
        </div>
        <div className="lightclients--details">
          <div className="column">
            <h2>In practice, light clients:</h2>
            <p>Rely on the sync committee.</p>
            <p>Provide a degree of verifiability.</p>
            <p>Stay updated inexpensively.</p>
          </div>
          <div className="column">
            <h2>Direct benefits</h2>
            <p>Provides direct access to the blockchain.</p>
            <p>Supports true censorship resistance.</p>
            <p>Minimizes hardware requirements.</p>
          </div>
        </div>
        <div className="lightclients--button">
          <a
            className="large-link"
            href="https://lodestar-lightclient.chainsafe.io/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Try the demo
          </a>
        </div>
      </div>
    </Fragment>
  );
};
