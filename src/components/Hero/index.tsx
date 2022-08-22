import React, { Fragment, useEffect } from 'react';
import { Button } from '../Button';
import './index.scss';
import { StarScene } from '../Stars';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  sentenceVariant,
  letterVariant,
  splitText,
} from '../../styles/animations';

export const Hero: React.FC = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const splitSentence = splitText(`Ethereum meets JavaScript.`);

  return (
    <Fragment>
      <div className="hero">
        <StarScene />
        <div className="text-wrapper" ref={ref}>
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
          <p>
            Lodestar is an open-source Ethereum consensus client written in
            Typescript.
          </p>
          <div className="button-group">
            <a
              href="https://chainsafe.github.io/lodestar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button primary>Install Lodestar</Button>
            </a>
            <a
              href="https://github.com/chainsafe/lodestar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button dark>Start contributing</Button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
