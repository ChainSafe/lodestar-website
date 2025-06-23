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
              Support for Lodestar comes primarily from public goods funding via organizations like the Ethereum Foundation. Our team supports and participates in the Protocol Guild, a collective of Ethereum core protocol contributors.
            </p>
          </div>
          <div className="column">
            <a
              href="https://etherscan.io/address/0xb4da52336092db22fe8e036866d59c6488604f89"
              target="__blank"
              rel="noopener noreferrer"
              className="large-link"
            >
              Donate to our Team Multisig
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
