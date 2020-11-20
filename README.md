# react-giphy-picker-https

[![npm version](https://badge.fury.io/js/react-giphy-picker.svg)](https://badge.fury.io/js/react-giphy-picker)

![](https://raw.githubusercontent.com/progresso-group/react-giphy-picker/master/example/preview.gif)

react-giphy-picker-https is a simple gif picker component using giphy API over https.

## Install

`yarn add @progresso/react-giphy-picker-https`

## Usage basic

```jsx
import Picker from 'react-giphy-picker-https'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {
  log (gif) {
    console.log(gif)
  }

  render () {
    return (
      <div>
        <Picker apiKey="your-giphy-api-key" onSelected={this.log.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
```

## Props

### `apiKey` (required)
Your giphy api key, see [API Quickstart Guide](https://developers.giphy.com/docs/api) on [developers.giphy.com](https://developers.giphy.com/).

#### `onSelected` (required)
Handles a gif selection and provides the selected gif as a [Gif Object](https://developers.giphy.com/docs/api/schema#gif-object).

#### `visible`
Set to `true` to make the component visible.

#### `modal`
Set to `true`, if you want the component to be displayed as a floating layer. It will set the component `position: absolute` and add a box shadow.

#### `style`
A `React.CSSProperties` object that appies to the outer component shape.

#### `searchBoxStyle`
A `React.CSSProperties` object that applies to the component's search box.

#### `gifStyle`
A `React.CSSProperties` object that applies to each rendered gif image within the component.

## Styles
Uses styled-components 💅 for the base styling.

## Development
    yarn
    yarn dev

## Test
    yarn test

## Build
    yarn
    yarn build

## License

[MIT](http://isekivacenz.mit-license.org/)
