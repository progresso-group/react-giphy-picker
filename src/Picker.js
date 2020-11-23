import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'whatwg-fetch'

export default class extends Component {
  constructor(props) {
    super (props)
    this.state = {
      gifs: [],
      searchValue: '',
      giphySearchUrl: 'https://api.giphy.com/v1/gifs/search?api_key=',
      giphyTrendingUrl: 'https://api.giphy.com/v1/gifs/trending?api_key='
    }
  }

  componentDidMount() {
    this.loadTrendingGifs()
  }

  static get propTypes() {
    return {
      apiKey: PropTypes.string.isRequired,
      onSelected: PropTypes.func.isRequired,
      visible: PropTypes.bool,
      modal: PropTypes.bool,
      style: PropTypes.object,
      searchBoxStyle: PropTypes.object,
      gifStyle: PropTypes.object,
      placeholderText: PropTypes.string,
      scrollComponent: PropTypes.func
    }
  }

  static get defaultProps() {
    return {
      visible: true,
      modal: false,
      style: { width: '250px' },
      searchBoxStyle: {},
      gifStyle: {},
      placeholderText: 'Search for GIFs'
    }
  }

  loadTrendingGifs() {
    const { giphyTrendingUrl} = this.state
    const { apiKey } = this.props;

    fetch (`${giphyTrendingUrl}${apiKey}`, {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((response) => {
      let gifs = response.data.map((g, i) => {return g.images})
      this.setState({gifs})
    })
  }

  searchGifs() {
    const { apiKey } = this.props;
    const { giphySearchUrl, searchValue } = this.state

    if (searchValue.length < 1) {
      return;
    }

    let url = `${giphySearchUrl}${apiKey}&q=${searchValue.replace(' ', '+')}`;
    this.setState({ gifs: [] });

    fetch(url, {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((response) => {
      let gifs = response.data.map((g, i) => {return g.images})
      this.setState({gifs})
    })
  }

  onGiphySelect (gif) {
    this.props.onSelected(gif)
  }

  onSearchChange (event) {
    event.stopPropagation()
    this.setState({searchValue: event.target.value}, () => this.searchGifs())
  }

  onKeyDown (event) {
    if (event.key === 'Escape') {
      event.preventDefault()
      this.reset()
    }
  }

  reset () {
    this.setState({searchValue: ''})
  }

  render() {
    const { gifs } = this.state
    const { visible, modal, style, searchBoxStyle, gifStyle, placeholderText, scrollComponent } = this.props

    const Scroller = scrollComponent ? scrollComponent : GiphyWrapper;

    return (
      <Wrapper>
        <GiphyPickerWrapper visible={visible} modal={modal} style={style}>
          <Input
            name="giphy-search"
            type="text"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            onChange={this.onSearchChange.bind(this)}
            value={this.state.searchValue}
            onKeyDown={this.onKeyDown.bind(this)}
            placeholder={placeholderText} style={searchBoxStyle} />
          <Scroller>
            {
              gifs.map((g, i) => {
                let gifUrl = g.fixed_height.url
                return (
                  <Giphy
                    className="giphy-gif"
                    style={gifStyle}
                    key={i}
                    src={gifUrl}
                    onClick={() => {this.onGiphySelect(g)}} />
                )
              })
            }
          </Scroller>
        </GiphyPickerWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
`

const GiphyPickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: ${props => props.modal ? 'absolute' : 'static'};
  opacity: ${props => props.visible ? 1 : 0};
  pointer-events: ${props => props.visible ? 'inherit' : 'none'};
  transition: opacity 300ms linear;
  border-radius: 2px;
  background: white;
  box-shadow: ${props => props.modal ? '3px 3px 5px #BFBDBD' : 'none'};
  height: 400px;
  z-index: 100;
`

const GiphyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
  justify-content: center;
  padding-left: 8px;
  padding-right: 8px;
  overflow-y: auto;
`

const Giphy = styled.img`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  margin-right: 4px;
  height: 100px;
  box-sizing: border-box;
`

const Input = styled.input`
  display: block;
  margin: 8px;
  padding: 7px 9px 8px;
  background-color: transparent;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: inherit;
  height: auto;
  line-height: 1.2;
  
  &:hover {
    border-color: rgba(51,122,183,.4);
  }

  &:focus {
    outline: none;
    border-color: #337ab7 !important;
  }
`
