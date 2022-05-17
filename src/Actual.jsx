import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import singleSpaReact from "single-spa-react";

import Home from './screens/Home';
import About from './screens/About';
import Testing from './screens/Testing';


import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-test" element={<Home />} />
        <Route path="/react-test/about" element={<About />} />
        <Route exact path="/react-test/testing/:id" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
