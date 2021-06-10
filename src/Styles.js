export const wrapperStyle = { position: 'relative' };

export const giphyPickerWrapperStyle = (modal, visible) => ({
  display: 'flex',
  flexDirection: 'column',
  position: modal ? 'absolute' : 'static',
  opacity: visible ? 1 : 0,
  pointerEvents: visible ? 'inherit' : 'none',
  transition: 'opacity 300ms linear',
  borderRadius: '2px',
  background: 'white',
  boxShadow: modal ? '3px 3px 5px #BFBDBD' : 'none',
  height: '400px',
  zIndex: 100
});

export const giphyWrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  alignContent: 'stretch',
  justifyContent: 'center',
  paddingLeft: '8px',
  paddingRight: '4px',
  overflowY: 'auto'
};

export const giphyContainerStyle = {
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '4px',
  marginRight: '4px',
  height: '100px',
  boxSizing: 'border-box',
  overflow: 'hidden'
};

export const giphyStyle = {
  cursor: 'pointer',
  height: '100px',
  boxSizing: 'border-box'
};

export const inputStyle = {
  display: 'block',
  margin: '8px',
  padding: '7px 9px 8px',
  backgroundColor: 'transparent',
  border: '1px solid #ddd',
  borderRadius: '4px',
  color: 'inherit',
  height: 'auto',
  lineHeight: '1.2'
};