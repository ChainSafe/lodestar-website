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

  const splitSentence = splitText(`Lodestar is a consensus beacon node and validator client for the Ethereum blockchain. Lodestar's tools and libraries enable Ethereum protocol development for Ziglang and JavaScript ecosystems.`);

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
              Advancing Ziglang and Ethereum ecosystems.
            </h1>
            <div className="text-wrapper">
              <h2>
                We're helping to improve the Zig ecosystem by contributing upstream, building Ethereum tooling and integrating with C libraries. These are some of our active project contributions:
              </h2>
              <div className='button-group'>
                <a
                  href="https://github.com/ChainSafe/blst-z"
                  target="__blank"
                  rel="noopener noreferrer"
                              >
                  <Button primary>blst-z</Button>
                </a>
                <a
                  href="https://github.com/ChainSafe/bun-ffi-z"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <Button dark>bun-ffi-z</Button>
                </a>
                <a
                  href="https://github.com/ChainSafe/hashtree-z"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <Button primary>hashtree-z</Button>
                </a>
                <a
                  href="https://github.com/ChainSafe/ssz-z"
                  target="__blank"
                  rel="noopener noreferrer"
                              >
                  <Button dark>ssz-z</Button>
                </a>
                <a
                  href="https://github.com/ChainSafe/zbuild"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <Button primary>zbuild</Button>
                </a>
                <a
                  href="https://github.com/ChainSafe/zig-discv5"
                  target="__blank"
                  rel="noopener noreferrer"
                              >
                  <Button dark>zig-discv5</Button>
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
