import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

// Fluent Nav with the following structure:
// - index
// - tasks
// - builds
// - buildroots
// - settings
// - help
const navLinks: INavLink[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    key: 'dashboard',
  },
  {
    name: 'Tasks',
    url: '/tasks',
    key: 'tasks',
  },
  {
    name: 'Builds',
    url: '/builds',
    key: 'builds',
  },
  {
    name: 'Buildroots',
    url: '/buildroots',
    key: 'buildroots',
  },
  {
    name: 'Settings',
    url: '/settings',
    key: 'settings',
  },
  {
    name: 'Help',
    url: '/help',
    key: 'help',
  },
];

// now export this as a component
const LapisNav: React.FunctionComponent = () => {
  return (
    <Nav
      groups={[
        {
          links: navLinks,
        },
      ]}
      styles={navStyles}
    />
  );
};

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    marginTop: '50px',
  },
  group: {
    width: 208,
  },
};
export default LapisNav;