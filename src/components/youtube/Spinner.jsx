import React from 'react'

const style = {
  spinner: {
    padding: '60px 30px',
    textAlign: 'center',
  },
  preloader: {
    display: 'inline-block',
  },
  span: {
    display: 'block',
    margin: '5px'
  }
}

const Spinner = () => {
  return (
    <div className="Spinner" style={style.spinner}>
      <div className='preloader-wrapper small active' style={style.preloader}>
        <div className='spinner-layer spinner-green-only'>
          <div className='circle-clipper left'>
            <div className='circle'></div>
          </div>
          <div className='gap-patch'>
            <div className='circle'></div>
          </div>
          <div className='circle-clipper right'>
            <div className='circle'></div>
          </div>
        </div>
      </div>
      <span style={style.span}>Carregando vídeos...</span>
    </div>
  )
}

export default Spinner
