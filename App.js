import React from 'react';
import {Provider} from './src/context/ShowsContext';
import AppNavigation from './src/navigation/AppNavigation';
export default function App() {
  return (
  <Provider>
    <AppNavigation />
  </Provider>
  );
}


