import * as React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface StudentsNavProps {}

export const StudentsNav: React.FC<StudentsNavProps> = () => {
  return (
    <>
      <Link to="/students">
        <Button>Students</Button>
      </Link>
      <Button href="#text-buttons">Team</Button>
      <Button href="#text-buttons">Classes</Button>
      <Button href="#text-buttons">Attendance</Button>
      <Button href="#text-buttons">Revenue</Button>
    </>
  );
};
