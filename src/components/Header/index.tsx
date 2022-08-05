import React, { Fragment } from 'react';
import { Button } from '../Button';
import './index.scss';

interface INavLink {
  id?: number;
  name: string;
  linkUrl: string;
}

const linksData: INavLink[] = [
  {
    id: 0,
    name: "Lodestar",
    linkUrl: "https://blog.chainsafe.io/lodestar-setup-guide-v2-a3d7492b5e5d",
  },
  {
    id: 1,
    name: "Usage",
    linkUrl: "https://blog.chainsafe.io/lodestar-setup-guide-v2-a3d7492b5e5d",
  },
  {
    id: 2,
    name: "Docs",
    linkUrl: "https://chainsafe.github.io/lodestar/",
  },
  {
    id: 3,
    name: "Demo",
    linkUrl: "https://lodestar-lightclient.chainsafe.io/",
  },
  {
    id: 4,
    name: "GitHub",
    linkUrl: "https://github.com/ChainSafe/lodestar",
  },
]

export const Header: React.FC = () => {
  return (
    <div className='nav'>
      <div className='nav--links-wrapper'>
      {linksData.map(({name, linkUrl}, index) => (
        <a href={linkUrl} className='nav-link' target='__blank' rel='noopener noreferrer'
        key={index}>
          {name}
        </a>
      ))}
      </div>
    </div>
  );
};
