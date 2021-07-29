import React from 'react';
import AppNavigation from './src/navigation/app-navigation';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/config';
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation/>
        </PersistGate>
      </Provider>
  );
}
