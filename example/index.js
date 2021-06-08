import Picker from '../lib/Picker'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

import { apiKey } from './apiKey';

class TestComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      enteredGif: {},
      visible: true,
      modal: false,
      rendering: true
    };
  }

  log(gif) {
    console.log(gif)
    this.setState({enteredGif: gif});
  }

  toggleVisible() {
    this.setState({visible: !this.state.visible});
  }

  toggleModal() {
    this.setState({modal: !this.state.modal});
  }

  toggleRendering() {
    this.setState({rendering: !this.state.rendering});
  }

  render () {
    const { enteredGif, visible, modal, rendering } = this.state;
    let url = '';
    if (enteredGif.fixed_width !== undefined) {
      url = enteredGif.fixed_width.url;
    }
    return (
      <div>
        <div style={{height: '500px', padding: '16px', backgroundColor: '#ddd'}}>
          { rendering ? (
              <Picker
                apiKey={apiKey}
                onSelected={this.log.bind(this)}
                visible={visible}
                modal={modal}
                style={{height: '400px'}}
                width={400}
                placeholderText="Suche GIFs"
              />
            ) : null
          }
          <span>Some other content that is partially coverted when modal mode<br />is turned on.</span>
        </div>
        <button onClick={this.toggleVisible.bind(this)}>toggle visibility</button>
        <button onClick={this.toggleModal.bind(this)}>toggle modal mode</button>
        <button onClick={this.toggleRendering.bind(this)}>toggle rendering</button>
        <img src={url} />
      </div>
    );
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
);
