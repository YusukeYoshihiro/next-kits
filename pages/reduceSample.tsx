import * as React from 'react';
import { useReducer } from 'react';
import Head from '../components/templates/head';
import Navigation from '../components/templates/navigation'
import Button from '../components/atoms/Button'

import { reducer, initialState } from '../store/reducer';

const reduceSample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <div>
      <Head title="About page" description="" url="" ogImage="" />
      <Navigation />
      <p>count: { state.count }</p>
      <Button title="RESET" action={() => dispatch({type: 'RESET'})}/>
      <Button title="+1" action={() => dispatch({type: 'INCREMENT'})}/>
      <Button title="+1" action={() => dispatch({type: 'DECREMENT'})}/>
    </div>
  )
};


export default reduceSample;
