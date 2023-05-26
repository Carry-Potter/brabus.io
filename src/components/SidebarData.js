import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'CARS',
    path: '/cars',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'SUPERCARS',
        path: '/cars/supercars',
      },
      {
        title: 'TUNING',
        path: '/cars/tuning',
      },
      {
        title: 'CONFIGURATOR',
        path: '/cars/configurator',
      },
      {
        title: 'CARS4SALE',
        path: '/cars/cars4sale',
      },
      {
        title: 'CLASSICS',
        path: '/cars/classics',
      },
      {
        title: 'ARMORING',
        path: '/cars/armoring',
      },
    ]
  },
  {
    title: 'FASHION',
    path: '/fashion',
  },
  {
    title: 'BOATS',
    path: '/boats',
  },
  {
    title: 'BRAND',
    path: '/brand',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'NEWS & EVENTS',
        path: '/brand/news&events',
      },
      {
        title: 'ABOUT BRABUS',
        path: '/brand/tuning',
      },
      {
        title: 'CAREER',
        path: '/brand/career',
      }
    ]
  },
  {
    title: 'CONTACT',
    path: '/contact',
  },
];
