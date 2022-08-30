import React, { Fragment, useEffect } from 'react';
import './index.scss';
import { tools } from '../../tools';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  staggerSlideVariant,
} from '../../styles/animations';

export const Tools: React.FC = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);


  return (
    <Fragment>
      <div ref={ref} className="tools">
        <motion.div className="tools--section">
          <h1 className="title">Supporting the Ethereum developer ecosystem</h1>
          <motion.div
            className="tools--animate"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            {tools.map(({ url, imgUrl, name }, i) => (
              <motion.div
                variants={staggerSlideVariant}
                className="tool"
                key={name + i}
              >
                <a href={url} target="__blank" rel="noopener noreferrer">
                  <img src={imgUrl} alt="" />
                </a>
                <a href={url} target="__blank" rel="noopener noreferrer">
                  {name}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Fragment>
  );
};
