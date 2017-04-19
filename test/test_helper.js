// 4 things we need to set up in our test_helper:

// Set up testing environment to run like a browser in the comment line
// node.js is what we are running at the comment line, and jsDom is the JS implementation of HTML in node.js
// when workin with node- we work with global instead of window
import jsdom from 'jsdom';
import _$ from 'jquery'; // just $ will try to reachout to the browser- and it will fail. because we have no browser here.
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
// ________________________________________________________
// this is setup our fake body, fake HTML
global.document = jsdom.jsdom('<!doctype html><body></body></html>');
// our fake window (its all in the jsDom docs)
global.window = global.document.defaultView;
// hey jQuery – when you boot up we want you to use this fake document and window we made for you
const $ = _$(global.window); // assigning our own jquery, don't go out the the DOM - just use the fake one we gave you
// this $ still has everthing that jquer has. we just assign a fake DOM, browser environment to it.

// ________________________________________________________
// build renderComponent helper that should render a giver React Class ( => can this be done with Enzyme? )
// React Test Util =>  https://facebook.github.io/react/docs/test-utils.html
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={ createStore(reducers, state) }>
      <ComponentClass {...props} />
    </Provider>
  );
  // props={props} will make this.props.props => instead use the spread operator {...props}
  // this will produce actuall HTML => this is the magic
  return $(ReactDOM.findDOMNode(componentInstance));
}

// ________________________________________________________
// Build helper for simulating events
// this way every instance of $ will have this simulate fn
$.fn.simulate = function(eventName, value) {
  // react test util simulate => https://www.udemy.com/react-redux-tutorial/learn/v4/t/lecture/4700762?start=0
  if(value) this.val(value);
  TestUtils.Simulate[eventName](this[0]);
}

// Setup chai-jQuery
// we pass our instance of $
chaiJquery(chai, chai.util, $);


export { renderComponent, expect };
