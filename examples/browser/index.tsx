import React from 'react';
import ReactDOM from 'react-dom';
import * as Theatre from 'theatre';
import { useTheatre } from '../../src';

const project = Theatre.getProject('My Awesome Project');
const timeline = project.getTimeline('My Awesome Timeline');

const App = () => {
  const { x, y } = useTheatre('Box', ['x', 'y'], timeline)
  
  return (
    <div>{x} {y}</div>
  );
}

const root = document.querySelector('#root');

ReactDOM.render(<App />, root);