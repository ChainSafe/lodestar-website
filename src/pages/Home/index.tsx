import React, { Fragment } from 'react';
import './index.scss';
import { Hero } from "../../components/Hero";
import { GeneralInfo } from '../../components/GeneralInfo';
import { Vision } from '../../components/Vision';
import { Community } from '../../components/Community';
import { Research } from '../../components/Research';

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Hero />
      <GeneralInfo />
      <Vision />
      <Community />
      <Research />
    </Fragment>
  );
};
