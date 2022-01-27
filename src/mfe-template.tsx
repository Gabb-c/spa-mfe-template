import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact, { ReactAppOrParcel } from 'single-spa-react';
import Root from './root.component';

const lifecycles: ReactAppOrParcel<unknown> = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary() {
    // Customize the root error boundary for your microfrontend here.
    return <></>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
