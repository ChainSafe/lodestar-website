import React, { Fragment } from 'react';
import './index.scss';
import { Hero } from '../../components/Hero';
import { GeneralInfo } from '../../components/GeneralInfo';
import { Vision } from '../../components/Vision';
import { Community } from '../../components/Community';
import { Research } from '../../components/Research';
import { Support } from '../../components/Support';
import { Team } from '../../components/Team';
import { Contributors } from '../../components/Contributors';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Stake } from '../../components/Stake';
import { Lightclients } from '../../components/Lightclients';
import { Timeline } from '../../components/Timeline';

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <GeneralInfo />
      <Vision />
      <Lightclients />
      <Community />
      <Research />
      <Stake />
      <Timeline />
      <Contributors />
      <Support />
      <Team />
      <Footer />
    </Fragment>
  );
};
