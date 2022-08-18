import React, { Fragment } from 'react';
import './index.scss';
import { motion } from 'framer-motion';
import { slideUpVariant } from '../../styles/animations';

export const Vision: React.FC = () => {
  return (
    <Fragment>
      <div className="vision">
        <img src="/strip.png" alt="" />
        <h1 className="title">
          Lodestar is making it possible for <em>anyone</em> to participate.
        </h1>
        <motion.div
          className="vision--properties"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={slideUpVariant} className="property">
            <img src="/prop1.png" alt="" />
            <h1>Maximal security, minimal trust, endless opportunities.</h1>
            <p>
              Using Lodestar to secure the Ethereum network brings us closer to
              a world with greater privacy, sovereignty, and sustainability.
            </p>
          </motion.div>
          <motion.div variants={slideUpVariant} className="property">
            <img src="/prop22.png" alt="" />
            <h1>Lowering the barrier to greater sovereignty.</h1>
            <p>
              We’re working to improve Ethereum usability, advocating for
              decentralization, and expanding access so more developers can get
              involved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Fragment>
  );
};
