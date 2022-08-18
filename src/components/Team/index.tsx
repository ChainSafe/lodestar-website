import React from 'react';
import { Button } from '../Button';
import './index.scss';
import { motion } from 'framer-motion';
import { slideUpVariant } from '../../styles/animations';

export const Team: React.FC = () => {
  return (
    <motion.div
      initial="offscreen"
      className="team"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <motion.div variants={slideUpVariant}>
        <div className="team--text-wrapper">
          <div className="column">
            <h1>Built with love by protocol engineers.</h1>
            <p>
              Lodestar is maintained by ChainSafe, one of the world’s leading
              blockchain research and development firms.
            </p>
            <h2>Join the team to build a brazen future.</h2>
            <a
              href="https://chainsafe.io/careers"
              target="__blank"
              rel="noopener noreferrer"
            >
              <Button primary>View open positions</Button>
            </a>
          </div>
          <img className="img" src="/team.png" alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};
