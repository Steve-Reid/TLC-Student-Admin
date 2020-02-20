import * as React from 'react';

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
