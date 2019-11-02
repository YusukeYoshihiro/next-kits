import * as React from 'react';
import { useContext } from 'react';

import SampleContext from '../../utils/SampleContext';

const ChileContextComponent: React.FC = () => {
  // 親コンポーネントで<Context.Provider>の中でこのコンポーネントを読むとcontextが注入される
  const context: any = useContext(SampleContext);
  return <div style={{padding: 10, background: context.color, color: '#eee'}}>{context.title}</div>
};

export default ChileContextComponent;
