import classNames from 'classnames';
import React, { Fragment, useState } from 'react';
import './index.scss';
import {tabs, tabContent } from "./tabData";

interface TabProps {
  name: string;
  isActive: boolean;
  id: string;
  onClick?: any
}

const Tab: React.FC<TabProps> = ({name, isActive, id, onClick}) => {
  return (
    <p
      key={id}
      id={id}
      onClick={onClick}
      className={classNames(isActive ? 'activeTab': '', 'tab')}
    >
      {name}
    </p>
  )
}

export const Timeline: React.FC = () => {

  const [activeTab, setActiveTab] = useState(0);

  //@ts-ignore
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== activeTab) {
      setActiveTab(index);
    }
  }

  return (
    <Fragment>
      <div className="timeline">
        <div className="timeline--text-wrapper">
          <div className="column">
            {tabContent.map(({year, caption, id, imgUrl}, index) => 
            (
              <div className="tab-content-wrapper">
              <div key={index} className={classNames(activeTab === parseInt(id) ? 'column' : 'unselected')}>
                  <h1 className='accent-year'>{year}</h1>
                  <p>
                    {caption}
                  </p>
                </div>
                {imgUrl ? <img className={classNames(activeTab === parseInt(id) ? 'show-img' : 'unselected')}
                src={imgUrl} alt="" /> : ''}
              </div>
            ))}
            <div className="tabs-container">{tabs.map(({id, name}) => (
              <Tab key={id} id={id} name={name} isActive={activeTab === parseInt(id)}
              onClick={handleClick}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
