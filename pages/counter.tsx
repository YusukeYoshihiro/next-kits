import * as React from 'react';
import { NextPage } from "next";
import { useSelector, useDispatch } from 'react-redux';

import Head from '../components/templates/head'
import Navigation from '../components/templates/navigation'
import { increment, decrement } from '../store/counter';

const CounterPage: NextPage = () => {
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <Head title="Index page" />
      <Navigation />
      <div>Counter</div>
      <div>count : { counter }</div>
      <button onClick={() => dispatch(increment(10))}>inc</button>
      <button onClick={() => dispatch(decrement(5))}>dec</button>
    </div>
  )
}
export default CounterPage
