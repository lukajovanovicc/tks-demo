'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Story } from '../core/types';

interface Props {
  items: Story[];
  mainColor: string;
}

const Navigation: FC<Props> = ({ items, mainColor }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeChild, setActiveChild] = useState<number | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
    setActiveChild(null);
  };

  const handleChildToggle = (index: number) => {
    setActiveChild((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
        setActiveChild(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className='w-full bg-white'>
      <div
        className={`container mx-auto flex justify-between w-full text-2xl text-${mainColor}`}
      >
        <ul className='w-full flex gap-4 py-6'>
          {items.map((item, index) => (
            <li
              key={item.id}
              className='cursor-pointer group flex flex-col relative'
              onClick={() => handleToggle(index)}
            >
              {item.name}
              <span
                className={`${
                  openIndex === index ? 'opacity-100' : 'opacity-0'
                } group-hover:opacity-100 h-[1px] w-full bg-${mainColor}`}
              ></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Submenu */}
      <div
        className={`w-full duration-300 ${
          openIndex !== null
            ? 'border-t-2 border-[#eef0f2] max-h-screen py-12'
            : 'border-none max-h-0'
        }`}
      >
        {openIndex !== null && (
          <ul className='w-full duration-300 container mx-auto flex gap-5'>
            {/* Left column with title */}
            <li className='flex flex-col w-1/3'>
              <p className={`text-4xl mb-4 text-${mainColor}`}>
                {items[openIndex].name}
              </p>
              <p className='text-black text-[16px] opacity-50 my-4'>
                {items[openIndex].content?.pageColor
                  ? `Page Color: ${items[openIndex].content.pageColor}`
                  : ''}
              </p>
            </li>

            {/* Middle column with children */}
            <li className='flex flex-col w-1/3'>
              <div
                className={`flex flex-col text-${mainColor} pr-5 pb-7 pt-2.5 border-t border-[#d9dee8]`}
              >
                <span className='text-xs'>Overview</span>
                <Link
                  href={`/${items[openIndex].full_slug}`}
                  className='hover:underline text-[16px]'
                >
                  {items[openIndex].name}
                </Link>
              </div>
              {items[openIndex].children?.map((child, idx) => {
                const hasGrandChildren =
                  child.children && child.children.length > 0;
                return hasGrandChildren ? (
                  <button
                    key={child.id}
                    onClick={() => handleChildToggle(idx)}
                    className={`w-full justify-between flex items-center pr-5 py-2.5 border-t border-[#d9dee8] text-[16px] ${
                      activeChild === idx
                        ? 'text-dark-blue'
                        : `text-${mainColor}`
                    }`}
                  >
                    <p className='hover:underline'>{child.name}</p>
                    <span className='text-xl'>{'>'}</span>
                  </button>
                ) : (
                  <Link
                    key={child.id}
                    href={`/${child.full_slug}`}
                    className={`w-full justify-between flex items-center pr-5 py-2.5 border-t border-[#d9dee8] text-${mainColor} text-[16px]`}
                  >
                    <p className='hover:underline'>{child.name}</p>
                  </Link>
                );
              })}
            </li>

            {/* Right column for third-level */}
            <li
              className={`flex flex-col duration-300 ${
                activeChild !== null ? 'w-1/3' : 'w-0'
              }`}
            >
              {activeChild !== null && (
                <>
                  {/* Parent element (Overview link for the second-level item) */}
                  <div
                    className={`flex flex-col text-${mainColor} pr-5 pb-7 pt-2.5 border-t border-[#d9dee8]`}
                  >
                    <span className='text-xs'>Overview</span>
                    <Link
                      href={`/${items[openIndex].children?.[activeChild]?.full_slug}`}
                      className='hover:underline text-[16px]'
                    >
                      {items[openIndex].children?.[activeChild]?.name}
                    </Link>
                  </div>

                  {/* Third-level children */}
                  {items[openIndex].children?.[activeChild]?.children?.map(
                    (grandChild) => (
                      <Link
                        href={`/${grandChild.full_slug}`}
                        key={grandChild.id}
                        className={`w-full justify-between flex items-center pr-5 py-2.5 border-t border-[#d9dee8] text-${mainColor} text-[16px] min-h-[49px]`}
                      >
                        <p className='hover:underline'>{grandChild.name}</p>
                      </Link>
                    )
                  )}
                </>
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
