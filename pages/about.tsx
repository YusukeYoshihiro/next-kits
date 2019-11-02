import * as React from 'react';
import { useReducer } from 'react';
import Head from '../components/templates/head';
import Navigation from '../components/templates/navigation'
import ChileContextComponent from '../components/organisms//ChileContextComponent'
import SampleContext from '../utils/SampleContext';

const About: React.FC = () => {
  return (
    <div>
      <Head title="About page" description="" url="" ogImage="" />
      <Navigation />
      <SampleContext.Provider value={{title: 'sample!!!', num: 1199, color: '#2980b9'}}>
        <p style={{color: '#e74c3c'}}>context & reducer hooks sample</p>
        <ChileContextComponent />
      </SampleContext.Provider>
    </div>
  )
}
export default About
