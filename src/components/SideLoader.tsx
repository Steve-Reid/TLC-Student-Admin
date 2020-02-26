import * as React from 'react';

interface LoaderProps {}

export const SideLoader: React.FC<LoaderProps> = () => {
  return (
    <main className="loader-sidebar-container">
      <svg>
        <rect />
      </svg>
    </main>
  );
};
