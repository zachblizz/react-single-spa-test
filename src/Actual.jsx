import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import singleSpaReact from "single-spa-react";

import Home from './screens/Home';
import About from './screens/About';
import Nav from './Nav';


import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/react-test/home" element={<Home />} />
        <Route path="/react-test/about" element={<About />} />
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
