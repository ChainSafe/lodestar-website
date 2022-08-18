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
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <GeneralInfo />
      <Vision />
      <Community />
      <Research />
      {/* <Contributors /> */}
      <Support />
      <Team />
      <Footer/>
    </Fragment>
  );
};
