"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("whatwg-fetch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  margin: 8px;\n  padding: 7px 9px 8px;\n  background-color: transparent;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  color: inherit;\n  height: auto;\n  line-height: 1.2;\n  \n  &:hover {\n    border-color: rgba(51,122,183,.4);\n  }\n\n  &:focus {\n    outline: none;\n    border-color: #337ab7 !important;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 4px;\n  margin-right: 4px;\n  height: 100px;\n  box-sizing: border-box;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n  align-content: stretch;\n  justify-content: center;\n  padding-left: 8px;\n  padding-right: 8px;\n  overflow-y: scroll;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n  transition: opacity 300ms linear;\n  border-radius: 2px;\n  background: white;\n  box-shadow: ", ";\n  height: 400px;\n  z-index: 100;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this.state = {
      gifs: [],
      searchValue: '',
      giphySearchUrl: 'https://api.giphy.com/v1/gifs/search?api_key=',
      giphyTrendingUrl: 'https://api.giphy.com/v1/gifs/trending?api_key='
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadTrendingGifs();
    }
  }, {
    key: "loadTrendingGifs",
    value: function loadTrendingGifs() {
      var _this2 = this;

      var giphyTrendingUrl = this.state.giphyTrendingUrl;
      var apiKey = this.props.apiKey;
      fetch("".concat(giphyTrendingUrl).concat(apiKey), {
        method: 'get'
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        var gifs = response.data.map(function (g, i) {
          return g.images;
        });

        _this2.setState({
          gifs: gifs
        });
      });
    }
  }, {
    key: "searchGifs",
    value: function searchGifs() {
      var _this3 = this;

      var apiKey = this.props.apiKey;
      var _this$state = this.state,
          giphySearchUrl = _this$state.giphySearchUrl,
          searchValue = _this$state.searchValue;

      if (searchValue.length < 1) {
        return;
      }

      var url = "".concat(giphySearchUrl).concat(apiKey, "&q=").concat(searchValue.replace(' ', '+'));
      this.setState({
        gifs: []
      });
      fetch(url, {
        method: 'get'
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        var gifs = response.data.map(function (g, i) {
          return g.images;
        });

        _this3.setState({
          gifs: gifs
        });
      });
    }
  }, {
    key: "onGiphySelect",
    value: function onGiphySelect(gif) {
      this.props.onSelected(gif);
    }
  }, {
    key: "onSearchChange",
    value: function onSearchChange(event) {
      var _this4 = this;

      event.stopPropagation();
      this.setState({
        searchValue: event.target.value
      }, function () {
        return _this4.searchGifs();
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        this.reset();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        searchValue: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var gifs = this.state.gifs;
      var _this$props = this.props,
          visible = _this$props.visible,
          modal = _this$props.modal,
          style = _this$props.style,
          searchBoxStyle = _this$props.searchBoxStyle,
          gifStyle = _this$props.gifStyle,
          placeholderText = _this$props.placeholderText;
      return /*#__PURE__*/_react["default"].createElement(Wrapper, null, /*#__PURE__*/_react["default"].createElement(GiphyPickerWrapper, {
        visible: visible,
        modal: modal,
        style: style
      }, /*#__PURE__*/_react["default"].createElement(Input, {
        name: "giphy-search",
        type: "text",
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        onChange: this.onSearchChange.bind(this),
        value: this.state.searchValue,
        onKeyDown: this.onKeyDown.bind(this),
        placeholder: placeholderText,
        style: searchBoxStyle
      }), /*#__PURE__*/_react["default"].createElement(GiphyWrapper, null, gifs.map(function (g, i) {
        var gifUrl = g.fixed_height.url;
        return /*#__PURE__*/_react["default"].createElement(Giphy, {
          className: "giphy-gif",
          style: gifStyle,
          key: i,
          src: gifUrl,
          onClick: function onClick() {
            _this5.onGiphySelect(g);
          }
        });
      }))));
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        apiKey: _propTypes["default"].string.isRequired,
        onSelected: _propTypes["default"].func.isRequired,
        visible: _propTypes["default"].bool,
        modal: _propTypes["default"].bool,
        style: _propTypes["default"].object,
        searchBoxStyle: _propTypes["default"].object,
        gifStyle: _propTypes["default"].object,
        placeholderText: _propTypes["default"].string
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        visible: true,
        modal: false,
        style: {
          width: '250px'
        },
        searchBoxStyle: {},
        gifStyle: {},
        placeholderText: 'Search for GIFs'
      };
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;

var Wrapper = _styledComponents["default"].div(_templateObject());

var GiphyPickerWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.modal ? 'absolute' : 'static';
}, function (props) {
  return props.visible ? 1 : 0;
}, function (props) {
  return props.visible ? 'all' : 'none';
}, function (props) {
  return props.modal ? '3px 3px 5px #BFBDBD' : 'none';
});

var GiphyWrapper = _styledComponents["default"].div(_templateObject3());

var Giphy = _styledComponents["default"].img(_templateObject4());

var Input = _styledComponents["default"].input(_templateObject5());