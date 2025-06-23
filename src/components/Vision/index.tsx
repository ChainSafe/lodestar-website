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
          Lodestar is building robust Ethereum software with <em>Zig</em>, supporting tools in <em>JavaScript</em>
        </h1>
        <motion.div
          className="vision--properties"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={slideUpVariant} className="property">
            <img src="/prop1.png" alt="" />
            <h1>Building with Zig</h1>
            <p>
              Zig is designed to be the simplest tool for writing optimal low-level software without surprises or hidden costs. Its combination of simplicity, control, and performance makes it a perfect fit for building robust Ethereum infrastructure.

            </p>
          </motion.div>
          <motion.div variants={slideUpVariant} className="property">
            <img src="/prop22.png" alt="" />
            <h1>Supporting JavaScript</h1>
            <p>
              Zig's future supports built-in browser and server support for WebAssembly through its compiler architecture. We'll continue supporting our TypeScript libraries and shipping WASM builds for critical modules. 
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Fragment>
  );
};
