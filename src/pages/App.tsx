import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import LapisNav from '../components/nav';
import Navbar from '../components/navbar';
const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

const App: React.FunctionComponent = () => {
  return (
    // main dashboard
    // add a microsoft fluent grid
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          <Navbar layerHostId = {""} />
          <LapisNav />


        </div>
      </div>
    </div>
  );
}

export default App;
