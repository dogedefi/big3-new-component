import desktop from './index.less';
import mobile from './mobile.less';
import useStyle from '@/hooks/useStyle';

import React from 'react';

const COMPONENT_NAME  = () => {
  const styles = useStyle(desktop, mobile);

  return <div />;
};

COMPONENT_NAME.displayName = COMPONENT_NAME.name

export default COMPONENT_NAME;
