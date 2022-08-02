import React, { Fragment } from 'react';
import './index.scss';
import { Hero } from "../../components/Hero";
import { GeneralInfo } from '../../components/GeneralInfo';
import { Vision } from '../../components/Vision';

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Hero />
      <GeneralInfo />
      <Vision />
    </Fragment>
  );
};
