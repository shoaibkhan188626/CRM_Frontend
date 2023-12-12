import React from 'react';
import { Spin } from 'antd';

const PageLoader = () => {
  return (
    <div className="centerAbsolue">
      <Spin size="large" />
    </div>
  );
};

export default PageLoader;
