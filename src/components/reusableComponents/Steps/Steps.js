import React from 'react';
import { IconContext } from 'react-icons';
import { useMedia } from 'react-use';

import Heading from 'components/reusableComponents/Heading';

import { FaRegHandPaper } from 'react-icons/fa';
import { MdOutlineChat } from 'react-icons/md';
import { BsBarChartSteps, BsCalendarCheck } from 'react-icons/bs';
import { ImPower } from 'react-icons/im';
import { AiOutlineSearch } from 'react-icons/ai';

import {
  titleFacts,
  listFacts,
  itemFacts,
  itemFactsMob,
  textPrP,
  iconClass,
  textSteps,
} from './Steps.module.css';

const stepsIcons = [
  <FaRegHandPaper />,
  <MdOutlineChat />,
  <BsBarChartSteps />,
  <ImPower />,
  <AiOutlineSearch />,
  <BsCalendarCheck />,
];
const Steps = ({ icons = '', data = {} }) => {
  const isTablet = useMedia('(min-width: 768px)');

  return (
    <div className="max-w-full">
      <h3 className={titleFacts}>{data.title}</h3>
      {!!data.steps.length && (
        <ul className={`${listFacts}`}>
          {data.steps.map(({ textPrimary, icon, textSecondary }, index) => {
            return (
              <li className={isTablet ? itemFacts : itemFactsMob} key={icons}>
                <div className="flex items-center gap-[10px] mb-1">
                  <IconContext.Provider
                    value={{
                      className: 'm-0 w-[22px] h-[22px]',
                      color: '#F38F55',
                    }}
                  >
                    {stepsIcons[index]}
                  </IconContext.Provider>
                  <Heading tag="h2" className={textPrP} text={textPrimary} />
                </div>

                <div className={iconClass}>
                  <svg className="desktop:w-[16px] desktop:h-[16px]">
                    <use href={`${icons}#icon-${icon}`} />
                  </svg>
                </div>

                <p className={textSteps}>{textSecondary}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Steps;
