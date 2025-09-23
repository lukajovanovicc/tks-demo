'use client';

import React, { FC, useState } from 'react';
import { NavItemStoryblok } from '../../../component-types-sb';
import Button from './Button';
import Link from 'next/link';

interface Props {
  items: NavItemStoryblok[];
}

const Navigation: FC<Props> = ({ items }) => {
  const [subMenuIndex, setSubMenuIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [activeThirdLevel, setActiveThirdLevel] = useState<string | null>(null);
  const [selecteSecondLevel, setSelectedSecondLevel] = useState<string | null>(
    null
  );

  const handleToggle = (id: number) => {
    setSubMenuIndex((prev) => (prev === id ? null : id));
    setCurrentIndex(id);
  };

  const handleThirdLevelToggle = (uid: string | null, text: string | null) => {
    setActiveThirdLevel((prev) => (prev === uid ? null : uid));
    setSelectedSecondLevel((prev) => (prev === text ? null : text));
  };

  return (
    <nav className='w-full bg-white'>
      <div className='container mx-auto flex justify-between w-full text-2xl text-blue'>
        <ul className='w-full flex gap-4 py-6'>
          {items.map(({ _uid, title }, index) => (
            <li
              key={_uid}
              className='cursor-pointer group flex flex-col relative'
              onClick={() => handleToggle(index)}
            >
              {title}
              <span
                className={`${
                  subMenuIndex === index ? 'opacity-100' : 'opacity-0'
                } group-hover:opacity-100 opacity-0 h-[1px] w-full bg-blue`}
              ></span>
            </li>
          ))}
        </ul>

        {/* <button className='text-blue hover:underline'>Search</button> */}
      </div>

      <div
        className={`w-full duration-300 ${
          subMenuIndex !== null && subMenuIndex === currentIndex
            ? 'border-t-2 border-[#eef0f2] max-h-screen py-12'
            : 'border-none max-h-0 '
        }`}
      >
        <ul
          className={`w-full duration-300 container mx-auto ${
            subMenuIndex === currentIndex ? 'flex gap-5' : 'hidden'
          }`}
        >
          {subMenuIndex !== null && (
            <>
              <li className='flex flex-col lg:max-w-1/3'>
                <p className='text-4xl mb-4'>{items[subMenuIndex].title}</p>
                <p className='text-black text-[16px] opacity-50 my-4'>
                  {items[subMenuIndex].description}
                </p>
                <Button text={items[subMenuIndex].button[0].text} />
              </li>
              <li className='flex flex-col w-1/3'>
                <div className='flex flex-col text-blue pr-5 pb-7 pt-2.5 border-t border-[#d9dee8] '>
                  <span className='text-xs'>Overview</span>
                  <p className='hover:underline text-[16px]'>
                    {items[subMenuIndex].title}
                  </p>
                </div>
                {items[subMenuIndex].secondLevel?.map(
                  ({ _uid, text, thirdLevel }) => {
                    if (thirdLevel && thirdLevel.length > 0) {
                      return (
                        <button
                          onClick={() => {
                            handleThirdLevelToggle(_uid, text);
                          }}
                          className={`w-full justify-between flex items-center pr-5 py-2.5 border-t border-[#d9dee8] text-[16px] ${
                            activeThirdLevel === _uid
                              ? 'text-dark-blue'
                              : 'text-blue'
                          }`}
                          key={_uid}
                        >
                          <p key={_uid} className='hover:underline'>
                            {text}
                          </p>
                          {thirdLevel && thirdLevel[0]?._uid && (
                            <p className='text-xl'>{'>'}</p>
                          )}
                        </button>
                      );
                    } else {
                      return (
                        <button
                          key={_uid}
                          className='w-full justify-between flex text-blue hover:underline items-center pr-5 py-2.5 border-t border-[#d9dee8] text-[16px]'
                        >
                          <Link href={'/'}> {text}</Link>
                        </button>
                      );
                    }
                  }
                )}
              </li>

              <li
                className={`flex flex-col duration-300 ${
                  activeThirdLevel ? 'w-1/3' : 'w-0'
                }`}
              >
                {items[subMenuIndex].secondLevel?.map(
                  ({ _uid, thirdLevel }) => {
                    if (_uid === activeThirdLevel && thirdLevel) {
                      return (
                        <ul key={_uid}>
                          <div
                            className={`${
                              activeThirdLevel
                                ? 'flex flex-col text-blue pr-5 pb-7 pt-2.5 border-t border-[#d9dee8]'
                                : 'hidden'
                            }`}
                          >
                            <span className='text-xs'>Overview</span>
                            <p className='hover:underline text-[16px]'>
                              {selecteSecondLevel}
                            </p>
                          </div>
                          {thirdLevel.map(({ _uid, text }) => (
                            <Link
                              href={'/'}
                              key={_uid}
                              className='w-full justify-between flex items-center pr-5 py-2.5 border-t border-[#d9dee8] text-blue text-[16px] min-h-[49px]'
                            >
                              <p className='hover:underline'>{text}</p>
                            </Link>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  }
                )}
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
