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
            <h1>Stake with Lodestar</h1>
            <p>
              Run Lodestar. Earn rewards. And do your part in securing a $100
              billion network. There are multiple ways to stake with Lodestar.
            </p>
            <div className="button-group">
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
                <Button dark>Rocketpool</Button>
              </a>
              <a
                href="https://eth-docker.net/Usage/QuickStart"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Button dark>eth-docker</Button>
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
