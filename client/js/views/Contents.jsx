import React from 'react';

import Header from './Header';

const Contents = ({
  children,
}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Contents;
