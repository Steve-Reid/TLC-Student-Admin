import * as React from 'react';

interface DummyProps {}

export const Dummy: React.FC<DummyProps> = () => {
  return <h1>Nothing</h1>;
};

/* eslint-disable react/display-name */
// import React from 'react';
// import MainNav from '../navs/MainNav';
// import { PricesSideBar } from '../prices/PricesSideBar';
// import { StudentsNav } from '../students/StudentsNav';
// import { StudentsSideBar } from '../students/StudentsSideBar';
// import { StudentsMain } from '../students/StudentsMain';
// import { ClassesSummary } from '../summaries/ClassesSummary';

// export type RouteTypes = {
//   path: string;
//   exact: boolean;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   nav: React.ReactType;
//   sidebar: React.ComponentType;
//   main: React.ComponentType;
//   footer: React.ComponentType;
// };

// export const routes: RouteTypes[] = [
//   {
//     path: '/',
//     exact: true,
//     nav: <MainNav />,
//     sidebar: <PricesSideBar />,
//     main: <ClassesSummary />,
//     footer: null,
//   },
//   {
//     path: '/students',
//     exact: true,
//     nav: <StudentsNav />,
//     sidebar: <StudentsSideBar />,
//     main: <StudentsMain />,
//   },
//   {
//     path: '/shoelaces',
//     exact: true,
//     nav: <MainNav />,
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Shoelaces</h2>,
//   },
// ];
