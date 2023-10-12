import React, { Fragment, useEffect } from 'react';
import { Button } from '../Button';
import './index.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  sentenceVariant,
  letterVariant,
  splitText,
  slideUpVariant,
} from '../../styles/animations';

export const Community: React.FC = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const splitSentence = splitText(`Lodestar is an alternative consensus client.`);

  return (
    <Fragment>
      <div className="community" ref={ref}>
        <div className="community--stats">
          <div className="text-wrapper">
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
            <p>
              Ethereum's decentralized network has greater resilience supporting
              multi-client architecture. Running alternative clients reduces your
              risk during correlated failures.
            </p>
            <a
              href="https://dankradfeist.de/ethereum/2022/03/24/run-the-majority-client-at-your-own-peril.html"
              target="__blank"
              rel="noopener noreferrer"
            >
              <Button dark>Read on</Button>
            </a>
            <img src="/stronger.png" alt="" />
          </div>
        </div>
        <motion.div
          className="community--double-col"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <motion.div className="card typescript" variants={slideUpVariant}>
            <h1>Written in the world’s most popular programming language</h1>
            <p>
              Lodestar is written in TypeScript, a superset of JavaScript, making it an accessible entry
              point into Ethereum development.
            </p>
            <a
              href="https://github.com/ChainSafe/lodestar"
              target="__blank"
              rel="noopener noreferrer"
            >
              <Button primary>Source Code</Button>
            </a>
            <img src="/TS.png" alt="" />
          </motion.div>
          <motion.div className="card social" variants={slideUpVariant}>
            <h1>A vibrant community</h1>
            <p>
              Feel welcome, meet fellow contributors, get support, and stay up to date on the
              latest news in our Discord and on our Twitter.
            </p>
            <div className="button-group">
              <a
                href="https://discord.com/invite/yjyvFRP"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Button dark>Join Discord</Button>
              </a>
              <a
                href="https://twitter.com/lodestar_eth"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Button dark>Follow us on Twitter</Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Fragment>
  );
};
