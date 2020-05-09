import React from 'react';
import Navigator from './routes/homeStack';

export default function App() {
  console.warn = () => {}
  
  return (
    <Navigator />
  );
}
