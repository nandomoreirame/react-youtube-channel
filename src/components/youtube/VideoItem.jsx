/* eslint jsx-a11y/anchor-is-valid:0 */
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const style = {
  card: {
    cursor: 'pointer',
  },
  cardTitle: {
    fontSize: '1.125rem',
    lineHeight: '1.4',
    fontWeight: '600',
    margin: '0',
  },
  figure: {
    display: 'block',
    width: '100%',
    padding: '0',
    margin: '0',
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  }
}

const VideosItem = ({ video, handleVideo }) => {
  const { title, thumbnails } = video.snippet

  return (
    <article className='col l3 m6 s12'>
      <ReactCSSTransitionGroup
        transitionName="video-item"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className='VideosItem card' style={style.card}>
          <figure
            style={style.figure}
            className='card-image waves-effect waves-block waves-light'
            onClick={() => handleVideo(video)}
          >
            <img
              style={style.img}
              src={thumbnails.medium.url}
              width={thumbnails.medium.width}
              height={thumbnails.medium.height}
              title={title}
              alt={title}
            />
          </figure>
          <div className='card-content'>
            <span
              style={style.cardTitle}
              className='card-title grey-text text-darken-4'
              title={title}
            >{ title }</span>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </article>
  )
}

export default VideosItem
