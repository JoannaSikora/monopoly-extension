import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Game from '../state/GamaSlice';
import { ReactElement } from 'react';

export const renderWithState = (children: ReactElement) => {
  render(
    <Provider
      store={configureStore({
        reducer: {
          Game
        }
      })}>
      {children}
    </Provider>
  );
};
