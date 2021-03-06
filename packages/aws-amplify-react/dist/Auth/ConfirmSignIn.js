'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _awsAmplify = require('aws-amplify');

var _AuthPiece2 = require('./AuthPiece');

var _AuthPiece3 = _interopRequireDefault(_AuthPiece2);

var _AmplifyTheme = require('../AmplifyTheme');

var _AmplifyTheme2 = _interopRequireDefault(_AmplifyTheme);

var _AmplifyUI = require('../AmplifyUI');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the License. A copy of the License is located at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://aws.amazon.com/apache2.0/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var logger = new _awsAmplify.Logger('ConfirmSignIn');

var ConfirmSignIn = function (_AuthPiece) {
    _inherits(ConfirmSignIn, _AuthPiece);

    function ConfirmSignIn(props) {
        _classCallCheck(this, ConfirmSignIn);

        var _this = _possibleConstructorReturn(this, (ConfirmSignIn.__proto__ || Object.getPrototypeOf(ConfirmSignIn)).call(this, props));

        _this.confirm = _this.confirm.bind(_this);
        return _this;
    }

    _createClass(ConfirmSignIn, [{
        key: 'confirm',
        value: function () {
            function confirm() {
                var _this2 = this;

                var user = this.props.authData;
                var code = this.inputs.code;

                _awsAmplify.Auth.confirmSignIn(user, code).then(function () {
                    return _this2.changeState('signedIn');
                })['catch'](function (err) {
                    return _this2.error(err);
                });
            }

            return confirm;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this3 = this;

                var _props = this.props,
                    authState = _props.authState,
                    hide = _props.hide;

                if (authState !== 'confirmSignIn') {
                    return null;
                }

                var theme = this.props.theme || _AmplifyTheme2['default'];

                if (hide && hide.includes(ConfirmSignIn)) {
                    return null;
                }

                return _react2['default'].createElement(
                    'div',
                    { className: 'amplify-form-section', style: theme.formSection },
                    _react2['default'].createElement(
                        _AmplifyUI.Header,
                        { theme: theme },
                        _awsAmplify.I18n.get('Confirm Code')
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'amplify-form-body', style: theme.sectionBody },
                        _react2['default'].createElement(_AmplifyUI.InputRow, {
                            autoFocus: true,
                            placeholder: _awsAmplify.I18n.get('Code'),
                            theme: theme,
                            key: 'code',
                            name: 'code',
                            onChange: this.handleInputChange
                        }),
                        _react2['default'].createElement(
                            _AmplifyUI.ButtonRow,
                            { theme: theme, onClick: this.confirm },
                            _awsAmplify.I18n.get('Confirm')
                        )
                    ),
                    _react2['default'].createElement(
                        _AmplifyUI.Footer,
                        { theme: theme },
                        _react2['default'].createElement(
                            _AmplifyUI.Link,
                            { theme: theme, onClick: function () {
                                    function onClick() {
                                        return _this3.changeState('signIn');
                                    }

                                    return onClick;
                                }() },
                            _awsAmplify.I18n.get('Back to Sign In')
                        )
                    )
                );
            }

            return render;
        }()
    }]);

    return ConfirmSignIn;
}(_AuthPiece3['default']);

exports['default'] = ConfirmSignIn;