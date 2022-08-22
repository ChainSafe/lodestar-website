/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { Button } from '../Button';
import { useContributors, IContributor } from './useContributors';
import './index.scss';

export const Contributors: React.FC = () => {
  const { contributors } = useContributors();
  return (
    <Fragment>
      <div className="contributors">
        <div className="contributors--text-wrapper">
          <div className="column">
            <h1>The stars of Lodestar.</h1>
            <h2>Thank you for your incredible contributions to Ethereum.</h2>
            <p>
              Contributing to Lodestar makes you eligible to mint a{' '}
              <a
                href="https://www.gitpoap.io/gh/ChainSafe/lodestar"
                target="__blank"
                rel="noopener noreferrer"
              >
                GitPOAP badge!
              </a>
            </p>
            <div className="button-group">
              <a
                href="https://github.com/ChainSafe/lodestar/labels/meta-good-first-issue"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Button primary>Help Wanted</Button>
              </a>
              <a
                href="https://ethereum.org/en/bug-bounty/"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Button dark>Bug Bounty Program</Button>
              </a>
            </div>
          </div>
          <div className="grid">
          {contributors && contributors.map(
              ({ id, html_url, avatar_url }: IContributor) => (
                <div className="contributor" key={id}>
                  <a href={html_url} target="_blank" rel="noopener noreferrer">
                    <img src={avatar_url} alt={id} className="avatar" />
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
