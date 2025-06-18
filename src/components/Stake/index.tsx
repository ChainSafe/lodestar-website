import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';
import { motion } from 'framer-motion';
import { slideUpVariant } from '../../styles/animations';

export const Stake: React.FC = () => {
  return (
    <Fragment>
      <motion.div
        className="stake"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="stake--text-wrapper" variants={slideUpVariant}>
          <div className="column">
            <h1>Host your own private RPC endpoint, earn rewards for validating the network </h1>
            <p>
              Bootstrap your own full Ethereum node with Lodestar using node setup software. Using a performant minority client makes the Ethereum network safer. 
            </p>
            <div className="button-group">
              <a
                href="https://chainsafe.github.io/lodestar/run/getting-started/quick-start-custom-guide"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Button primary>Quick Start</Button>
              </a>
              <a
                href="https://docs.dappnode.io/docs/user/staking/ethereum/solo/mainnet/"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Button dark>DappNode</Button>
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
                <Button dark>Eth Docker</Button>
              </a>
            </div>
          </div>
          <div className="column">
            <img src="/stake.png" alt="" />
          </div>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};
