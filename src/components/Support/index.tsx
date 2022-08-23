import React, { Fragment } from 'react';
import './index.scss';

export const Support: React.FC = () => {
  return (
    <Fragment>
      <div className="support">
        <div className="support--text-wrapper">
          <div className="column">
            <h1>Support Lodestar </h1>
            <p>
              Support for Lodestar comes primarily from public goods funding via organizations like the Ethereum Foundation and Gitcoin. Our team supports and participates in the Protocol Guild, a collective of Ethereum contributors.
            </p>
          </div>
          <div className="column">
            <a
              href="https://gitcoin.co/grants/6034/lodestar-typescript-ethereum-consensus-client"
              target="__blank"
              rel="noopener noreferrer"
              className="large-link"
            >
              Gitcoin Grants
            </a>
            <a
              href="https://protocol-guild.readthedocs.io/en/latest/"
              target="__blank"
              rel="noopener noreferrer"
              className="large-link"
            >
              Protocol Guild
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
