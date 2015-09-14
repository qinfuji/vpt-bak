/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import 'babel/polyfill';
import React  from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import dispatcher from './core/dispatcher';
import router from './router';
import location from './core/location';
import ActionTypes from './constants/ActionTypes';

import App from './components/App';

const container = document.getElementById('app');
const context = {
  onSetTitle: value => document.title = value,
  onSetMeta: (name, content) => {
    // Remove and create a new <meta /> tag in order to make it work
    // with bookmarks in Safari
    let elements = document.getElementsByTagName('meta');
    [].slice.call(elements).forEach((element) => {
      if (element.getAttribute('name') === name) {
        element.parentNode.removeChild(element);
      }
    });
    let meta = document.createElement('meta');
    meta.setAttribute('name', name);
    meta.setAttribute('content', content);
    document.getElementsByTagName('head')[0].appendChild(meta);
  }
};

function run() {
  
  router.dispatch({ path: window.location.pathname, context }, (state, component) => {
    ReactDOM.render(component, container, () => {
      let css = document.getElementById('css');
      css.parentNode.removeChild(css);
    });
  });

  dispatcher.register(action => {
    if (action.type === ActionTypes.CHANGE_LOCATION) {
      router.dispatch({ path: action.path, context }, (state, component) => {
        ReactDOM.render(component, container);
      });
    }
  });

    //ReactDOM.render(<App></App>, container);
}

function handlePopState(event) {
  location.navigateTo(window.location.pathname, { replace: !!event.state });
}

// Run the application when both DOM is ready
// and page content is loaded
new Promise(resolve => {
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', resolve);
    window.addEventListener('popstate', handlePopState);
  } else {
    window.attachEvent('onload', resolve);
    window.attachEvent('popstate', handlePopState);
  }
}).then(() => FastClick.attach(document.body)).then(run);
