import React, { Fragment, useEffect } from 'react';
import { Button } from '../Button';
import './index.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  sentenceVariant,
  letterVariant,
  splitText,
} from '../../styles/animations';

export const GeneralInfo: React.FC = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const splitSentence = splitText(`Lodestar is a consensus beacon node and validator client for the Ethereum blockchain. Lodestar's tools and libraries enable Ethereum protocol development for Ziglang and JavaScript ecosystems.`);

  return (
    <Fragment>
      <div ref={ref} className="general" id="about">
        <div className="general--about">
          <div className="text-wrapper">
            <motion.h1
              className="about-text"
              initial="hidden"
              viewport={{ once: true }}
              animate={controls}
              variants={sentenceVariant}
            >
              {splitSentence.map((char, index) => (
                <motion.span key={index} variants={letterVariant}>
                  {char}{' '}
                </motion.span>
              ))}
            </motion.h1>
            <a
              href="https://ethereum.org/en/run-a-node/"
              target="__blank"
              rel="noopener noreferrer"
            >
              <Button dark>More about nodes</Button>
            </a>
          </div>
          <div className="cli"></div>
        </div>
        <div className="general--setup" id="install">
          <div className="general--setup--left">
            <h1 className="title">
              Run your own node, quickly.
            </h1>
            <div className="text-wrapper">
              <h2>
                Bootstrap your own full Ethereum node with Lodestar using node setup software. Using a performant minority client makes the Ethereum network safer. 
              </h2>
              <div className='button-group'>
                <a
                  href="https://docs.dappnode.io/docs/user/staking/ethereum/solo/mainnet/"
                  target="__blank"
                  rel="noopener noreferrer"
                              >
                  <Button primary>DappNode</Button>
                </a>
                <a
                  href="https://docs.rocketpool.net/guides/node/eth-clients.html#lodestar"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                <Button dark>Rocket Pool</Button>
                </a>
                <a
                  href="https://eth-docker.net/Usage/QuickStart"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <Button primary>Eth Docker</Button>
                </a>
              </div>
            </div>
          </div>
          <img className="window" src="/window2.png" alt="" />
        </div>
      </div>
    </Fragment>
  );
};
