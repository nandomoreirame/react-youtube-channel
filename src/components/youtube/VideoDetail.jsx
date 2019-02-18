import React from 'react'

const VideoDetail = ({ video, handleVideo }) => {
  if (!video) {
    document.body.classList.remove('modal-open')
    return <span/>
  }

  const { title } = video.snippet
  const { description } = video.snippet
  const { videoId } = video.snippet.resourceId

  const style = {
    modal: {
      zIndex: '10000',
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      display: 'table',
      backgroundColor: 'transparent',
    },
    modalOverlay: {
      zIndex: '1',
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      backgroundColor: 'rgba(0, 0, 0, .95)',
      cursor: 'pointer',
    },
    modalInner: {
      zIndex: '2',
      position: 'relative',
      height: '100vh',
      maxWidth: '960px',
      overflowY: 'auto',
      marginRight: 'auto',
      marginLeft: 'auto',
      padding: '40px',
      color: '#fff',
    },
    modalClose: {
      zIndex: '10000',
      position: 'absolute',
      top: '30px',
      right: '30px',
      background: 'none transparent',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
    videoContainer: {
      position: 'relative',
      paddingBottom: '56.25%',
      paddingTop: '25px',
      height: '0'
    },
    videoIframe: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%'
    }
  }

  document.body.classList.add('modal-open')

  return (
    <article
      className='card'
      style={style.modal}
    >
      <div
        style={style.modalOverlay}
        onClick={() => handleVideo(null)}
      />
      <button
        style={style.modalClose}
        onClick={() => handleVideo(null)}
      >
        <i className='material-icons' style={{ fontSize: '45px' }}>close</i>
      </button>
      <div style={style.modalInner}>
        <div className='card-image' style={style.videoContainer}>
          <iframe
            style={style.videoIframe}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allowFullScreen
            title={title}
          />
        </div>
        <div className='card-content'>
          <h4 className='card-title'>{ title }</h4>
          <p>{ description }</p>
        </div>
      </div>
    </article>
  )
}

export default VideoDetail
