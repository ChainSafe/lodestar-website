import React, { Fragment } from 'react';
import './index.scss';
import { Hero } from "../../components/Hero";
import { GeneralInfo } from '../../components/GeneralInfo';
import { Vision } from '../../components/Vision';
import { Community } from '../../components/Community';
import { Research } from '../../components/Research';
import { Support } from '../../components/Support';
import { Team } from '../../components/Team';
import { Contributors } from '../../components/Contributors';

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Hero />
      <GeneralInfo />
      <Vision />
      <Community />
      <Research />
      <Contributors />
      <Support />
      <Team />
    </Fragment>
  );
};
