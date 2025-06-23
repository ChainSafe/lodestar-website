import React, { Fragment, useEffect } from 'react';
import './index.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  sentenceVariant,
  letterVariant,
  splitText,
} from '../../styles/animations';

export const Research: React.FC = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const splitSentence = splitText(`Join the many developers who are improving the Ethereum protocol through various methods of participation.`);

  return (
    <Fragment>
      <div className="research" ref={ref}>
        <div className="research--text-wrapper">
          <div className="column">
            <motion.h1
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
          </div>
          <div className="column">
            <a
              href="https://epf.wiki"
              target="__blank"
              rel="noopener noreferrer"
              className="large-link"
            >
              Learn about the Ethereum Protocol Fellowship
            </a>
            <a
              href="https://ethresear.ch"
              target="__blank"
              rel="noopener noreferrer"
              className="large-link"
            >
              Contribute research for Ethereum
            </a>
            <a
              href="https://github.com/ChainSafe/lodestar/blob/unstable/CONTRIBUTING.md"
              target="__blank"
              rel="noopener noreferrer"
              className="large-link large-link--filled"
            >
              Start Contributing to Lodestar
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
