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

  const splitSentence = splitText(`Lodestar is a consensus beacon node and validator client for the Ethereum blockchain. Lodestar's tools and libraries enable Ethereum protocol development for the JavaScript ecosystem.`);

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
              Don't trust, verify: Run your own node.
            </h1>
            <div className="text-wrapper">
              <h2>
                Running your own full Ethereum node ensures your own independence.
                Validate with a minority client like Lodestar to make the Ethereum network safer.
              </h2>
              <div className='button-group'>
                <a
                  href="https://hackmd.io/@philknows/rJegZyH9q"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                <Button dark>Quick Start Guide</Button>
                </a>
                <a
                  href="https://github.com/ChainSafe/lodestar-quickstart"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <Button primary>Quick Start Repository</Button>
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
