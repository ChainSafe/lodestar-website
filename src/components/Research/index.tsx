import React, { Fragment, useEffect } from 'react';
import './index.scss';
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer';
import { sentenceVariant, letterVariant, splitText } from '../../styles/animations';


export const Research: React.FC = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView])

  const sentenceText = `Join the many developers who are improving Lodestar and our JavaScript libraries in experimental ways.`;

  const splitSentence = splitText(sentenceText)

  return (
    <Fragment>
      <div className='research' ref={ref}>
          <div className='research--text-wrapper'>
            <div className='column'>
              <motion.h1
              initial='hidden'
              viewport={{ once: true }}
              animate={controls}
              variants={sentenceVariant}
              >{splitSentence.map((char, index) => (
                <motion.span key={index} variants={letterVariant}>
                  {char}{" "}
                </motion.span>
              ))}</motion.h1>
            </div>
            <div className='column'>
              <a href='https://snowbridge.snowfork.com/' target='__blank' rel='noopener noreferrer' className='large-link'>Trustless Bridge with Light Clients</a>
              <a href='https://github.com/AtHeartEngineering/js-libp2p-gossipsub-dandelion' target='__blank' rel='noopener noreferrer' className='large-link'>Dandelion RLP for Validator Privacy</a>
              <a href='https://github.com/ChainSafe/lodestar/blob/unstable/README.md' target='__blank' rel='noopener noreferrer' className='large-link large-link--filled'>Start Experimenting</a>
            </div>
        </div>
      </div>
    </Fragment>
  );
};
