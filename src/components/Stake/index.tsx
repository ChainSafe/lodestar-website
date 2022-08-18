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
              billion network.
            </p>
            <a href="/" target="__blank" rel="noopener noreferrer">
              <Button dark>Guide to self-hosting</Button>
            </a>
          </div>
          <div className="column">
            <img src="/stake.png" alt="" />
          </div>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};
