import React, { Fragment } from 'react';

import WithoutHooks from './components/WithoutHooks';
import WIthHooks from './components/WithHooks';

const App = () => {
  return (
    <Fragment>
      <WithoutHooks />
      <WIthHooks />
    </Fragment> 
  )
}

export default App;
