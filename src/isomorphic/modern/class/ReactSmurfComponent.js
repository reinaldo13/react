/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactSmurfComponent
 */

'use strict';

var ReactNoopUpdateQueue = require('ReactNoopUpdateQueue');

var emptyObject = require('emptyObject');
var warning = require('warning');

/**
 * Base class helpers for the updating state of a component.
 */
function ReactSmurfComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactSmurfComponent.prototype.isReactComponent = {};

ReactSmurfComponent.prototype.setState = function() {
  warning(
    false,
    'setState(...) is not supported by smurf components. ' +
    'Stateless components FTW!!! ' +
    'Keep your state in the root React component instead'
  );
};

module.exports = ReactSmurfComponent;
