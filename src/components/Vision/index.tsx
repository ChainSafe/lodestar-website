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
          Lodestar is making it possible for <em>JavaScript</em> to participate
        </h1>
        <motion.div
          className="vision--properties"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={slideUpVariant} className="property">
            <img src="/prop1.png" alt="" />
            <h1>For stakers, node operators and data consumers</h1>
            <p>
              Using Lodestar to secure the Ethereum network brings us closer to
              a world with greater resiliency, sovereignty, and sustainability
            </p>
          </motion.div>
          <motion.div variants={slideUpVariant} className="property">
            <img src="/prop22.png" alt="" />
            <h1>For researchers, builders and experimenters</h1>
            <p>
              We provide the tools to empower the largest group of developers 
              to generate value on Ethereum and progress development of the protocol
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Fragment>
  );
};
