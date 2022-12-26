import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
// ReactDom.render(
//   <App />,document.getElementById('root')
// );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);