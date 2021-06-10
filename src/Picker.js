import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'whatwg-fetch'

import { makeCancelable } from './MakeCancelable';
import {
  wrapperStyle,
  giphyPickerWrapperStyle,
  giphyWrapperStyle,
  giphyContainerStyle,
  giphyStyle,
  inputStyle
 } from './Styles';

let nextSearchRequest = new Date();

export default class extends Component {
  constructor(props) {
    super (props)
    this.state = {
      gifs: [],
      searchValue: '',
      giphySearchUrl: 'https://api.giphy.com/v1/gifs/search?api_key=',
      giphyTrendingUrl: 'https://api.giphy.com/v1/gifs/trending?api_key='
    };
  }

  componentDidMount() {
    this.loadTrendingGifs();
  }

  componentWillUnmount() {
    if (this.cancelableLoad) {
      this.cancelableLoad.cancel();
    }
  }

  static get propTypes() {
    return {
      apiKey: PropTypes.string.isRequired,
      onSelected: PropTypes.func.isRequired,
      visible: PropTypes.bool,
      width: PropTypes.number,
      modal: PropTypes.bool,
      style: PropTypes.object,
      searchBoxStyle: PropTypes.object,
      gifStyle: PropTypes.object,
      placeholderText: PropTypes.string,
      scrollComponent: PropTypes.func
    };
  }

  static get defaultProps() {
    return {
      visible: true,
      modal: false,
      style: { },
      width: 250,
      searchBoxStyle: {},
      gifStyle: {},
      placeholderText: 'Search for GIFs'
    }
  }

  loadTrendingGifs() {
    const { giphyTrendingUrl} = this.state;
    const { apiKey } = this.props;

    this.cancelableLoad = makeCancelable(fetch(`${giphyTrendingUrl}${apiKey}`, { method: 'get' }));

    this.cancelableLoad.promise
      .then((response) => {
        return response.json();
      }, () => {})
      .then((response) => {
        if (!response) {
          return;
        }
        let gifs = response.data.map((g, i) => {return g.images});
        gifs = this.orderToFit(gifs);
        this.setState({gifs});
      }, () => {}
    );
  }

  searchGifs() {
    const { apiKey } = this.props;
    const { giphySearchUrl, searchValue } = this.state;

    const delay = 1000;

    if (searchValue.length < 1) {
      return;
    }

    const url = `${giphySearchUrl}${apiKey}&q=${searchValue.replace(' ', '+')}`;

    nextSearchRequest = Date.now() + delay;
    setTimeout(() => {
      if (Date.now() >= nextSearchRequest) {
        this.setState({ gifs: [] });
        fetch(url, { method: 'get' })
        .then((response) => { return response.json(); })
        .then((response) => {
          let gifs = response.data.map((g, i) => {return g.images});
          gifs = this.orderToFit(gifs);
          this.setState({gifs});
        });
      }
    }, delay);
  }

  orderToFit(gifs) {
    let { width } = this.props;
    width -= 12; // padding
    width -= 20; // scrollbar

    const gifElements = gifs.length;
    gifs = gifs.sort((a, b) => a.fixed_height.width < b.fixed_height.width ? -1 : 1);

    const sortedGifs = [];

    const addGif = (gif) => {
      sortedGifs.push(gif);
      gifs = gifs.filter(g => g !== gif);
    };

    let currentWidth = 0;
    let currentLine = 0;
    for (let i=0; i<gifElements; i++) {
      let nextGif = gifs[0];
      nextGif.line = currentLine;
      nextGif.cutValue = 0;
      addGif(nextGif);
      currentWidth+= nextGif.fixed_height.width / 2 + 4;

      if (currentWidth > width) {
        const remainingWidth = currentWidth - width;
        const gifsInLine = sortedGifs.filter(g => g.line === currentLine);
        const cutValue = remainingWidth / gifsInLine.length / 2;
        gifsInLine.forEach(g => { g.cutValue = cutValue });

        currentLine++;
        currentWidth = 0;
      }
    }

    return sortedGifs;
  }

  onGiphySelect (gif) {
    this.props.onSelected(gif);
  }

  onSearchChange (event) {
    event.stopPropagation();
    this.setState({searchValue: event.target.value}, () => this.searchGifs());
  }

  onKeyDown (event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.reset();
    }
  }

  reset () {
    this.setState({searchValue: ''});
  }

  render() {
    const { gifs } = this.state;
    const { visible, modal, style, width, searchBoxStyle, gifStyle, placeholderText, scrollComponent } = this.props;

    const GiphyWrapper = p => <div style={giphyWrapperStyle}>{p.children}</div>;

    const Scroller = scrollComponent ? scrollComponent : GiphyWrapper;
    const gifHeight = gifStyle ? gifStyle.height ? gifStyle.height : 100 : 100;

    return (
      <div className="giphy-picker" styles={wrapperStyle}>
        <style>{
         `.search-box:hover {
            border-color: rgba(51,122,183,.4);
          }
          .search-box:focus {
            outline: none;
            border-color: #337ab7 !important;
          }`}
        </style>
        <div style={{...style, ...giphyPickerWrapperStyle(modal, visible), width: `${width}px`}}>
          <input
            name="giphy-search"
            className="search-box"
            style={{...inputStyle, ...searchBoxStyle}}
            type="text"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            onChange={this.onSearchChange.bind(this)}
            value={this.state.searchValue}
            onKeyDown={this.onKeyDown.bind(this)}
            placeholder={placeholderText}
          />
          <Scroller>
            {
              gifs.map((g, i) => {
                const gif = g.fixed_height;
                const height = gifHeight;
                let gifWidth = gifHeight / gif.height * gif.width;
                gifWidth -= (g.cutValue * 2);

                return (
                  <div
                    className="giphy-container-gif"
                    style={{...giphyContainerStyle, ...gifStyle, width: gifWidth, height: height, backgroundColor: '#cccccc'}}
                    key={i}
                    onClick={() => {this.onGiphySelect(g)}}
                  >
                    <img
                      className="giphy-gif"
                      style={{...giphyStyle, marginLeft: `${-g.cutValue}px` }}
                      src={gif.url}
                    />
                  </div>
                );
              })
            }
          </Scroller>
        </div>
      </div>
    )
  }
}

