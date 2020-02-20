import * as React from 'react';
import { StudentsList } from './StudentsList';

interface StudentsSideBarProps {}

export const StudentsSideBar: React.FC<StudentsSideBarProps> = () => {
  return <StudentsList />;
};
